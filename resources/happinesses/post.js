this.createdDate = new Date().getTime();
this.user = me.id;
emit('happinesses:create', this);