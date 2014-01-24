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
lt.plugins.lt_wordcount.setWordCountHTML_BANG_ = (function setWordCountHTML_BANG_(ed,obj){return lt.object.__GT_content.call(null,obj).innerHTML = [cljs.core.str(lt.objs.editor.__GT_cm_ed.call(null,ed).getValue().length)].join('');
});
lt.plugins.lt_wordcount.wordcount_skeleton = (function wordcount_skeleton(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-wordcount"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with count content eventually"], null)], null));var seq__8190_8206 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8191_8207 = null;var count__8192_8208 = 0;var i__8193_8209 = 0;while(true){
if((i__8193_8209 < count__8192_8208))
{var vec__8194_8210 = cljs.core._nth.call(null,chunk__8191_8207,i__8193_8209);var ev__8101__auto___8211 = cljs.core.nth.call(null,vec__8194_8210,0,null);var func__8102__auto___8212 = cljs.core.nth.call(null,vec__8194_8210,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8211,func__8102__auto___8212);
{
var G__8213 = seq__8190_8206;
var G__8214 = chunk__8191_8207;
var G__8215 = count__8192_8208;
var G__8216 = (i__8193_8209 + 1);
seq__8190_8206 = G__8213;
chunk__8191_8207 = G__8214;
count__8192_8208 = G__8215;
i__8193_8209 = G__8216;
continue;
}
} else
{var temp__4092__auto___8217 = cljs.core.seq.call(null,seq__8190_8206);if(temp__4092__auto___8217)
{var seq__8190_8218__$1 = temp__4092__auto___8217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8190_8218__$1))
{var c__7486__auto___8219 = cljs.core.chunk_first.call(null,seq__8190_8218__$1);{
var G__8220 = cljs.core.chunk_rest.call(null,seq__8190_8218__$1);
var G__8221 = c__7486__auto___8219;
var G__8222 = cljs.core.count.call(null,c__7486__auto___8219);
var G__8223 = 0;
seq__8190_8206 = G__8220;
chunk__8191_8207 = G__8221;
count__8192_8208 = G__8222;
i__8193_8209 = G__8223;
continue;
}
} else
{var vec__8195_8224 = cljs.core.first.call(null,seq__8190_8218__$1);var ev__8101__auto___8225 = cljs.core.nth.call(null,vec__8195_8224,0,null);var func__8102__auto___8226 = cljs.core.nth.call(null,vec__8195_8224,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8225,func__8102__auto___8226);
{
var G__8227 = cljs.core.next.call(null,seq__8190_8218__$1);
var G__8228 = null;
var G__8229 = 0;
var G__8230 = 0;
seq__8190_8206 = G__8227;
chunk__8191_8207 = G__8228;
count__8192_8208 = G__8229;
i__8193_8209 = G__8230;
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
lt.plugins.lt_wordcount.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8231 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8231))
{var ts_8232 = temp__4092__auto___8231;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8232))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8232);
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-wordcount","watch-editor","lt.plugins.lt-wordcount/watch-editor",1287187374),new cljs.core.Keyword(null,"desc","desc",1016984067),"Wordcount: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var wordcount_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-wordcount","lt-wordcount.wordcount","lt.plugins.lt-wordcount/lt-wordcount.wordcount",1621207250));var ed = lt.objs.editor.pool.last_active.call(null);lt.objs.tabs.add_or_focus_BANG_.call(null,wordcount_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wordcount","wordcount",1907577783)], null),(function (){return wordcount_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-wordcount","read-editor","lt.plugins.lt-wordcount/read-editor",2415467623));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-wordcount","read-editor","lt.plugins.lt-wordcount/read-editor",2415467623));
})], null));
}

//# sourceMappingURL=wordcount_compiled.js.map