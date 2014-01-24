if(!lt.util.load.provided_QMARK_('lt.plugins.lt-wordcount')) {
goog.provide('lt.plugins.lt_wordcount');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_wordcount.setWordCountHTML_BANG_ = (function setWordCountHTML_BANG_(ed,obj){var target_container = lt.object.__GT_content.call(null,obj);var source_text = lt.objs.editor.__GT_cm_ed.call(null,ed).getValue();return target_container.innerHTML = [cljs.core.str("Characters: "),cljs.core.str(source_text.length)].join('');
});
lt.plugins.lt_wordcount.wordcount_skeleton = (function wordcount_skeleton(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-wordcount"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with count content eventually"], null)], null));var seq__9696_9702 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9697_9703 = null;var count__9698_9704 = 0;var i__9699_9705 = 0;while(true){
if((i__9699_9705 < count__9698_9704))
{var vec__9700_9706 = cljs.core._nth.call(null,chunk__9697_9703,i__9699_9705);var ev__8101__auto___9707 = cljs.core.nth.call(null,vec__9700_9706,0,null);var func__8102__auto___9708 = cljs.core.nth.call(null,vec__9700_9706,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___9707,func__8102__auto___9708);
{
var G__9709 = seq__9696_9702;
var G__9710 = chunk__9697_9703;
var G__9711 = count__9698_9704;
var G__9712 = (i__9699_9705 + 1);
seq__9696_9702 = G__9709;
chunk__9697_9703 = G__9710;
count__9698_9704 = G__9711;
i__9699_9705 = G__9712;
continue;
}
} else
{var temp__4092__auto___9713 = cljs.core.seq.call(null,seq__9696_9702);if(temp__4092__auto___9713)
{var seq__9696_9714__$1 = temp__4092__auto___9713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9696_9714__$1))
{var c__7486__auto___9715 = cljs.core.chunk_first.call(null,seq__9696_9714__$1);{
var G__9716 = cljs.core.chunk_rest.call(null,seq__9696_9714__$1);
var G__9717 = c__7486__auto___9715;
var G__9718 = cljs.core.count.call(null,c__7486__auto___9715);
var G__9719 = 0;
seq__9696_9702 = G__9716;
chunk__9697_9703 = G__9717;
count__9698_9704 = G__9718;
i__9699_9705 = G__9719;
continue;
}
} else
{var vec__9701_9720 = cljs.core.first.call(null,seq__9696_9714__$1);var ev__8101__auto___9721 = cljs.core.nth.call(null,vec__9701_9720,0,null);var func__8102__auto___9722 = cljs.core.nth.call(null,vec__9701_9720,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___9721,func__8102__auto___9722);
{
var G__9723 = cljs.core.next.call(null,seq__9696_9714__$1);
var G__9724 = null;
var G__9725 = 0;
var G__9726 = 0;
seq__9696_9702 = G__9723;
chunk__9697_9703 = G__9724;
count__9698_9704 = G__9725;
i__9699_9705 = G__9726;
continue;
}
}
} else
{}
}
break;
}
return e__8100__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","lt-wordcount.wordcount","lt.plugins.lt-wordcount/lt-wordcount.wordcount",1621207250),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-wordcount.wordcount","lt-wordcount.wordcount",3640843657)], null),new cljs.core.Keyword(null,"name","name",1017277949),"wordcount",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-wordcount","on-close-destroy","lt.plugins.lt-wordcount/on-close-destroy",4169553202)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.lt_wordcount.wordcount_skeleton.call(null,this$);
}));
lt.plugins.lt_wordcount.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9727 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9727))
{var ts_9728 = temp__4092__auto___9727;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9728))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9728);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","on-close-destroy","lt.plugins.lt-wordcount/on-close-destroy",4169553202),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_wordcount.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_wordcount.__BEH__update_word_count = (function __BEH__update_word_count(this$){var wordcount_obj = new cljs.core.Keyword(null,"wordcount","wordcount",1907577783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.lt_wordcount.setWordCountHTML_BANG_.call(null,this$,wordcount_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","update-word-count","lt.plugins.lt-wordcount/update-word-count",1801536203),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_wordcount.__BEH__update_word_count,new cljs.core.Keyword(null,"desc","desc",1016984067),"Wordcount: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.lt-wordcount","update-word-count","lt.plugins.lt-wordcount/update-word-count",1801536203)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-wordcount","watch-editor","lt.plugins.lt-wordcount/watch-editor",1287187374),new cljs.core.Keyword(null,"desc","desc",1016984067),"Wordcount: Open word count tab and watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var wordcount_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","lt-wordcount.wordcount","lt.plugins.lt-wordcount/lt-wordcount.wordcount",1621207250));var ed = lt.objs.editor.pool.last_active.call(null);lt.objs.tabs.add_or_focus_BANG_.call(null,wordcount_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wordcount","wordcount",1907577783)], null),(function (){return wordcount_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-wordcount","update-word-count","lt.plugins.lt-wordcount/update-word-count",1801536203));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-wordcount","update-word-count","lt.plugins.lt-wordcount/update-word-count",1801536203));
})], null));
}

//# sourceMappingURL=wordcount_compiled.js.map