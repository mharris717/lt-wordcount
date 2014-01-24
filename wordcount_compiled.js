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
lt.plugins.lt_wordcount.wordcount_skeleton = (function wordcount_skeleton(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-wordcount"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with count content eventually"], null)], null));var seq__9423_9429 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9424_9430 = null;var count__9425_9431 = 0;var i__9426_9432 = 0;while(true){
if((i__9426_9432 < count__9425_9431))
{var vec__9427_9433 = cljs.core._nth.call(null,chunk__9424_9430,i__9426_9432);var ev__8101__auto___9434 = cljs.core.nth.call(null,vec__9427_9433,0,null);var func__8102__auto___9435 = cljs.core.nth.call(null,vec__9427_9433,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___9434,func__8102__auto___9435);
{
var G__9436 = seq__9423_9429;
var G__9437 = chunk__9424_9430;
var G__9438 = count__9425_9431;
var G__9439 = (i__9426_9432 + 1);
seq__9423_9429 = G__9436;
chunk__9424_9430 = G__9437;
count__9425_9431 = G__9438;
i__9426_9432 = G__9439;
continue;
}
} else
{var temp__4092__auto___9440 = cljs.core.seq.call(null,seq__9423_9429);if(temp__4092__auto___9440)
{var seq__9423_9441__$1 = temp__4092__auto___9440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9423_9441__$1))
{var c__7486__auto___9442 = cljs.core.chunk_first.call(null,seq__9423_9441__$1);{
var G__9443 = cljs.core.chunk_rest.call(null,seq__9423_9441__$1);
var G__9444 = c__7486__auto___9442;
var G__9445 = cljs.core.count.call(null,c__7486__auto___9442);
var G__9446 = 0;
seq__9423_9429 = G__9443;
chunk__9424_9430 = G__9444;
count__9425_9431 = G__9445;
i__9426_9432 = G__9446;
continue;
}
} else
{var vec__9428_9447 = cljs.core.first.call(null,seq__9423_9441__$1);var ev__8101__auto___9448 = cljs.core.nth.call(null,vec__9428_9447,0,null);var func__8102__auto___9449 = cljs.core.nth.call(null,vec__9428_9447,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___9448,func__8102__auto___9449);
{
var G__9450 = cljs.core.next.call(null,seq__9423_9441__$1);
var G__9451 = null;
var G__9452 = 0;
var G__9453 = 0;
seq__9423_9429 = G__9450;
chunk__9424_9430 = G__9451;
count__9425_9431 = G__9452;
i__9426_9432 = G__9453;
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
lt.plugins.lt_wordcount.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9454 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9454))
{var ts_9455 = temp__4092__auto___9454;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9455))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9455);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","on-close-destroy","lt.plugins.lt-wordcount/on-close-destroy",4169553202),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_wordcount.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_wordcount.__BEH__read_editor = (function __BEH__read_editor(this$){var wordcount_obj = new cljs.core.Keyword(null,"wordcount","wordcount",1907577783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.lt_wordcount.setWordCountHTML_BANG_.call(null,this$,wordcount_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","read-editor","lt.plugins.lt-wordcount/read-editor",2415467623),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_wordcount.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Wordcount: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.lt-wordcount","read-editor","lt.plugins.lt-wordcount/read-editor",2415467623)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-wordcount","watch-editor","lt.plugins.lt-wordcount/watch-editor",1287187374),new cljs.core.Keyword(null,"desc","desc",1016984067),"Wordcount: Open word count tab and watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var wordcount_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","lt-wordcount.wordcount","lt.plugins.lt-wordcount/lt-wordcount.wordcount",1621207250));var ed = lt.objs.editor.pool.last_active.call(null);lt.objs.tabs.add_or_focus_BANG_.call(null,wordcount_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wordcount","wordcount",1907577783)], null),(function (){return wordcount_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-wordcount","read-editor","lt.plugins.lt-wordcount/read-editor",2415467623));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-wordcount","read-editor","lt.plugins.lt-wordcount/read-editor",2415467623));
})], null));
}

//# sourceMappingURL=wordcount_compiled.js.map