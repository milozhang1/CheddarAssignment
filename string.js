String.prototype.endsWith = function(search, position) {
        if (position === undefined || position >= this.length) {
			position = this.length;
		}
        return this.substring(position - search.length, position) === search;
};
