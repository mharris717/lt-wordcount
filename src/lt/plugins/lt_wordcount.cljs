(ns lt.plugins.lt-wordcount
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

; Gets the character count from editor
; and updates the wordcount tab
(defn setWordCountHTML! [ed obj]
  (let [target-container (object/->content obj)
        source-text (.getValue (editor/->cm-ed ed))]
    (set!
       (.-innerHTML target-container)
       (str "Characters: " (.-length source-text)))))

; Creates the HTML div that will contain the count
(defui wordcount-skeleton [this]
  [:div {:class "lt-wordcount"}
   [:h1 "This should be replaced with count content eventually"]])

; The wordcount object
; Creates the div on init
(object/object* ::lt-wordcount.wordcount
                :tags [:lt-wordcount.wordcount]
                :name "wordcount"
                :behaviors [::on-close-destroy]
                :init (fn [this]
                        (wordcount-skeleton this)))

; close the wordcount tab
(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

; behavior to update count, triggered on change
(behavior ::update-word-count
          :triggers [:change ::update-word-count]
          :desc "Wordcount: Read the content inside an editor"
          :reaction (fn [this]
                      (let [wordcount-obj (:wordcount @this)]
                        (setWordCountHTML! this wordcount-obj))))

; The command that creates the count tab
; Called from the commands list
;
; 1. Creates a wordcount obj
; 2. Gets the editor to show the count for
; 3. Add the count tab
; 4. Set the wordcount property of the editor to the wordcount obj
; 5. Add the update-word-count behavior to the editor
; 6. Invoke the update-word-count behavior manually, as it won't
;    be invoked automatically until the next change in the editor
(cmd/command {:command ::watch-editor
              :desc "Wordcount: Open word count tab and watch this editor for changes"
              :exec (fn []
                      (let [wordcount-obj (object/create ::lt-wordcount.wordcount)
                            ed (pool/last-active)]
                        (tabs/add-or-focus! wordcount-obj)
                        (object/update! ed [:wordcount] (fn [] wordcount-obj))
                        (object/add-behavior! ed ::update-word-count)
                        ;; Update the new tab with the wordcount
                        (object/raise ed ::update-word-count)))})
