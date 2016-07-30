function Bear(options) {
	if (!(this instanceof Bear)) { return new Bear(options)};

	options = options || {};
	this.type = this.type || 'bear';
	this.says = this.says || 'nothing';

	Bear.prototype.growls = function(){
		 console.log('The ' + this.type + ' says ' + this.says);
		 return this;
	};

	Bear.prototype.walks = function(){
		 console.log('The ' + this.type + ' walks ');
		 return this;
	};


	Bear.prototype.sleeps = function(){
		 console.log('The ' + this.type + ' sleeps ' );
		 return this;
	};


}



module.exports = Bear;