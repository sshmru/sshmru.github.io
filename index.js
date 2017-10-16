var h = preact.h;

//https://github.com/developit/preact-in-es3
function createClass(obj) {
	// sub-class Component:
	function F(){ preact.Component.call(this); }
	var p = F.prototype = new preact.Component;
	// copy our skeleton into the prototype:
	for (var i in obj) {
            if (i === 'getDefaultProps' && typeof obj.getDefaultProps === 'function') {
                F.defaultProps = obj.getDefaultProps() || {};
            } else {
                p[i] = obj[i];
            }
        }
	// restore constructor:
	return p.constructor = F;
}



var Main = createClass({
	render: function() {
		return (
			h('main', null,
				h('h1', null, 'oh hello there')
			)
		);
	}
});


preact.render(h(Main), document.body);
