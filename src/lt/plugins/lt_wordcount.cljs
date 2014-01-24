(ns lt.plugins.lt-wordcount
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn setWordCountHTML! [ed obj]
  (let [target-container (object/->content obj)
        source-text (.getValue (editor/->cm-ed ed))]
    (set!
       (.-innerHTML target-container)
       (str "Characters: " (.-length source-text)))))

(defui wordcount-skeleton [this]
  [:div {:class "lt-wordcount"}
   [:h1 "This should be replaced with count content eventually"]])

(object/object* ::lt-wordcount.wordcount
                :tags [:lt-wordcount.wordcount]
                :name "wordcount"
                :behaviors [::on-close-destroy]
                :init (fn [this]
                        (wordcount-skeleton this)))

;; close window
(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))


(behavior ::read-editor
          :triggers [:change ::read-editor]
          :desc "Wordcount: Read the content inside an editor"
          :reaction (fn [this]
                      (let [wordcount-obj (:wordcount @this)]
                        (setWordCountHTML! this wordcount-obj))))

;; object/update! takes object, array of props, function that's evaled to make value
(cmd/command {:command ::watch-editor
              :desc "Wordcount: Open word count tab and watch this editor for changes"
              :exec (fn []
                      (let [wordcount-obj (object/create ::lt-wordcount.wordcount)
                            ed (pool/last-active)]
                        (tabs/add-or-focus! wordcount-obj)
                        (object/update! ed [:wordcount] (fn [] wordcount-obj))
                        (object/add-behavior! ed ::read-editor)
                        ;; Update the new tab with the wordcount
                        (object/raise ed ::read-editor)))})
