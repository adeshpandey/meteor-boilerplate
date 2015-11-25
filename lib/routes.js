Router.configure({
	layoutTemplate:'ApplicationLayout',
	notFoundTemplate:'NotFound'
})
Router.route('/',{template:"home"});

Router.route('/',{path:'/:link_id', template:"home",data:function(){
	
	return {'l':this.params.link_id};
}
});