// ==UserScript==
// @name        Hot Opinions
// @description Quickly find hot opinions on 4chan
// @version     1.0.5
// @author      dnsev
// @namespace   dnsev
// @include     http://boards.4chan.org/*
// @include     https://boards.4chan.org/*
// @include     http://boards.4channel.org/*
// @include     https://boards.4channel.org/*
// @grant       none
// @homepage    https://github.com/dnsev/hotop
// @supportURL  https://github.com/dnsev/hotop/issues
// @updateURL   https://raw.githubusercontent.com/dnsev/hotop/master/hotop.user.js
// @downloadURL https://raw.githubusercontent.com/dnsev/hotop/master/hotop.user.js
// @icon        data:image/png;base64,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
// @run-at      document-start
// ==/UserScript==

/* jshint eqnull:true, noarg:true, noempty:true, eqeqeq:true, bitwise:false, strict:true, undef:true, curly:false, browser:true, devel:true, newcap:false, maxerr:50 */
(function () {
	"use strict";

	// Enabled?
	if (!window.MutationObserver || !document.querySelector || !document.documentElement) {
		console.log("Browser is not modern enough to use hotop");
		return;
	}


	var $$ = function (selector, root) {
		return (root || document).querySelectorAll(selector);
	};
	var $ = (function () {

		var d = document;

		var Module = function (selector, root) {
			return (root || d).querySelector(selector);
		};

		Module.ready = (function () {

			var callbacks = [],
				check_interval = null,
				check_interval_time = 250;

			var callback_check = function () {
				if (
					(document.readyState === "interactive" || document.readyState === "complete") &&
					callbacks !== null
				) {
					var cbs = callbacks,
						cb_count = cbs.length,
						i;

					callbacks = null;

					for (i = 0; i < cb_count; ++i) {
						cbs[i].call(null);
					}

					window.removeEventListener("load", callback_check, false);
					window.removeEventListener("DOMContentLoaded", callback_check, false);
					document.removeEventListener("readystatechange", callback_check, false);

					if (check_interval !== null) {
						clearInterval(check_interval);
						check_interval = null;
					}

					return true;
				}

				return false;
			};

			window.addEventListener("load", callback_check, false);
			window.addEventListener("DOMContentLoaded", callback_check, false);
			document.addEventListener("readystatechange", callback_check, false);

			return function (cb) {
				if (callbacks === null) {
					cb.call(null);
				}
				else {
					callbacks.push(cb);
					if (check_interval === null && callback_check() !== true) {
						check_interval = setInterval(callback_check, check_interval_time);
					}
				}
			};

		})();

		Module.prepend = function (parent, child) {
			return parent.insertBefore(child, parent.firstChild);
		};
		Module.add = function (parent, child) {
			return parent.appendChild(child);
		};
		Module.before = function (root, next, node) {
			return root.insertBefore(node, next);
		};
		Module.after = function (root, prev, node) {
			return root.insertBefore(node, prev.nextSibling);
		};
		Module.replace = function (root, elem) {
			return root.parentNode.replaceChild(elem, root);
		};
		Module.remove = function (elem) {
			return elem.parentNode.removeChild(elem);
		};
		Module.tnode = function (text) {
			return d.createTextNode(text);
		};
		Module.node = function (tag, class_name, text) {
			var elem = d.createElement(tag);
			elem.className = class_name;
			if (text !== undefined) {
				elem.textContent = text;
			}
			return elem;
		};
		Module.node_ns = function (namespace, tag, class_name) {
			var elem = d.createElementNS(namespace, tag);
			elem.setAttribute("class", class_name);
			return elem;
		};
		Module.node_simple = function (tag) {
			return d.createElement(tag);
		};

		return Module;

	})();


	var hue_range = [ 220.0 / 360.0, -60.0 / 360.0 ];
	var hue_range_per_reply = 1.0 / 20.0;
	var all_posts = [];
	var all_posts_map = {};
	var post_queue = null;
	var post_queue_timer = null;
	var node_heat_container = null;
	var node_heat_container_inner = null;
	var is_setup = false;
	var scroll_range_pre = [ 0, 0 ];


	var get_most_recent_visible_post = function () {
		for (var i = all_posts.length - 1; i >= 0; --i) {
			if (all_posts[i].rect.height > 1.0e-5) {
				return all_posts[i];
			}
		}
		return null;
	};

	var post_is_hidden = function (post) {
		return get_computed_style(post).display === "none";
	};

	var start_post_queue = function () {
		if (post_queue_timer !== null) return;

		// Update
		var posts = post_queue.splice(0, 25),
			ii = posts.length,
			html_rect, i, p, r;
		if (ii === 0) return;
		if (!is_setup) setup();

		html_rect = document.documentElement.getBoundingClientRect();
		if (all_posts.length > 0) {
			p = all_posts[all_posts.length - 1];
			r = get_node_abs_rect(p.post, html_rect);
			if (Math.abs(p.rect.top - r.top) >= 1 || Math.abs(p.rect.height - r.height) >= 1) {
				update_all_post_indicators(html_rect);
			}
		}

		for (i = 0; i < ii; ++i) {
			process_post(posts[i], html_rect);
		}

		update_heat_container_size(html_rect);
		update_indicators_scroll();

		// Continue
		post_queue_timer = setTimeout(function () {
			post_queue_timer = null;
			start_post_queue();
		}, 250);
	};
	var process_post = function (post, html_rect) {
		var data, id, d, r, n;

		if (
			!post_is_base(post) ||
			(id = get_id_from_post_container(post)) === null ||
			Object.prototype.hasOwnProperty.call(all_posts_map, id)
		) {
			return;
		}

		r = get_node_abs_rect(post, html_rect);

		n = $.node("a", "hm_indicator");
		n.setAttribute("href", "#p" + id);
		n.setAttribute("data-target", id);
		n.style.top = r.top + "px";
		n.style.height = r.height + "px";
		n.addEventListener("click", function (event) { return on_indicator_click(event, data); }, false);
		$.add(node_heat_container_inner, n);

		d = get_most_recent_visible_post();
		if (d !== null) {
			d.indicator.style.height = (r.top - d.rect.top) + "px";
		}

		data = {
			id: id,
			post: post,
			rect: r,
			indicator: n,
			color: null,
			replies: 0
		};

		all_posts.push(data);
		all_posts_map[id] = data;

		observe_post_visibility(post, data);

		update_quotelinks(post);
		update_post_heat(data);
	};
	var update_all_post_indicators = function (html_rect) {
		var rect_next, data_next, height, data, rect, n, i, ii;

		i = 0;
		ii = all_posts.length - 1;
		if (ii < 0) return;

		data_next = all_posts[i];
		rect_next = get_node_abs_rect(data_next.post, html_rect);

		while (i < ii) {
			data = data_next;
			rect = rect_next;

			++i;
			data_next = all_posts[i];
			rect_next = get_node_abs_rect(data_next.post, html_rect);

			n = data.indicator;
			height = rect.height;
			height = rect_next.top - rect.top;

			data.rect = rect;
			n.style.top = rect.top + "px";
			n.style.height = height + "px";
		}

		// Last
		data_next.rect = rect_next;
		n = data_next.indicator;
		n.style.top = rect_next.top + "px";
		n.style.height = rect_next.height + "px";
	};
	var update_heat_container_size = function (html_rect) {
		var win_height = window.innerHeight;
		node_heat_container_inner.style.transform = "scale(1," + Math.min(1, win_height / html_rect.height) + ")";
	};
	var update_post_heat = function (post_data) {
		var replies = post_data.replies,
			hue = hue_range[0] + (hue_range[1] - hue_range[0]) * Math.min(1, replies * hue_range_per_reply),
			color = color_to_hex(hsv_to_rgb(hue, 1, 1));

		if (hue < 1.0) hue += 1.0;

		post_data.color = color;
		post_data.indicator.setAttribute("data-replies", replies);
		post_data.indicator.style.backgroundColor = color;
		post_data.indicator.setAttribute("title", "Replies: " + replies);
	};
	var update_quotelinks = function (post) {
		var nodes = post_get_quotelinks(post),
			updates = {},
			re_id = /\d+/,
			post_data, id, m, n, i, ii;

		for (i = 0, ii = nodes.length; i < ii; ++i) {
			n = nodes[i];
			m = re_id.exec(n.getAttribute("href") || "");
			if (m !== null) {
				id = m[0];
				if (
					Object.prototype.hasOwnProperty.call(all_posts_map, id) &&
					!Object.prototype.hasOwnProperty.call(updates, id)
				) {
					updates[id] = true;
					post_data = all_posts_map[id];
					++post_data.replies;
					update_post_heat(post_data);
				}
			}
		}
	};

	var observe_post_visibility = (function () {
		var update_timer = null;

		var update_indicators = function () {
			on_window_resize();
		};

		var delayed_update_indicators = function () {
			if (update_timer !== null) {
				clearTimeout(update_timer);
			}

			update_timer = setTimeout(function () {
				update_timer = null;
				update_indicators();
			}, 1);
		};

		return function (post, data) {
			var is_hidden = false;

			var on_observe = function () {
				var is_hidden_new = post_is_hidden(post);
				if (is_hidden_new === is_hidden) { return; }
				is_hidden = is_hidden_new;
				data.indicator.style.display = (is_hidden ? "none" : "");
				delayed_update_indicators();
			};

			on_observe();

			new MutationObserver(on_observe).observe(post, {
				childList: false,
				subtree: false,
				attributes: true,
				attributeFilter: [ "hidden", "style", "class" ]
			});
		};
	})();

	var process_removed_posts = function (posts) {
		var update = false,
			html_rect, i, ii;

		for (i = 0, ii = posts.length; i < ii; ++i) {
			if (process_removed_post(posts[i])) {
				update = true;
			}
			else if (!update && !post_is_floating(posts[i])) {
				update = true;
			}
		}

		if (update) {
			html_rect = document.documentElement.getBoundingClientRect();
			update_all_post_indicators(html_rect); // not necessary unless total height has changed
			update_heat_container_size(html_rect);
		}
	};
	var process_removed_post = function (post) {
		var data, id, i, ii;

		if (
			!post_is_base(post) ||
			(id = get_id_from_post_container(post)) === null ||
			!Object.prototype.hasOwnProperty.call(all_posts_map, id)
		) {
			return false;
		}

		// Get data
		data = all_posts_map[id];

		// Remove nodes
		if (data.indicator.parentNode !== null) $.remove(data.indicator);
		data.post = null;
		data.indicator = null;

		// Remove
		delete all_posts_map[id];
		for (i = 0, ii = all_posts.length; i < ii; ++i) {
			if (all_posts[i] === data) {
				all_posts.splice(i, 1);
				break;
			}
		}

		return true;
	};

	var color_to_hex = function (rgb) {
		var s = "#",
			n, i;
		for (i = 0; i < 3; ++i) {
			n = (Math.floor(rgb[i] * 255)).toString(16);
			if (n.length < 2) s += "0";
			s += n;
		}
		return s;
	};
	var hsv_to_rgb = function (h, s, v) {
		if (s === 0) {
			return [ v , v , v ];
		}

		h = (h % 1.0) * 6.0;

		var i = Math.floor(h),
			f = h - i,
			p = v * (1 - s),
			q = v * (1 - s * f),
			t = v * (1 - s * (1 - f));

		switch (i) {
			case 0:
				return [ v , t , p ];
			case 1:
				return [ q , v , p ];
			case 2:
				return [ p , v , t ];
			case 3:
				return [ p , q , v ];
			case 4:
				return [ t , p , v ];
			default:
				return [ v , p , q ];
		}
	};

	var get_node_abs_rect = function (node, html_rect) {
		var r = node.getBoundingClientRect();
		return {
			top: r.top - html_rect.top,
			height: r.height
		};
	};

	var get_id_from_post_container = function (container) {
		var id = container.id,
			n, m;

		if (!id) {
			n = $("[id]", container);
			if (n === null) return null;
			id = n.id;
		}

		m = /\d+/.exec(id);
		return (m === null ? null : m[0]);
	};
	var post_is_base = function (container) {
		var p = container.parentNode;
		return (p === null ? false : p.classList.contains("thread"));
	};
	var post_get_quotelinks = function (container) {
		var nodes = $$(".quotelink", container),
			par = $("blockquote.postMessage", container),
			results = [],
			n, i, ii;

		if (par !== null) {
			for (i = 0, ii = nodes.length; i < ii; ++i) {
				n = nodes[i];
				if (get_blockquote_parent(n) === par) {
					results.push(n);
				}
			}
		}

		return results;
	};
	var get_blockquote_parent = function (node) {
		while (true) {
			node = node.parentNode;
			if (!node) return null;
			if (node.tagName === "BLOCKQUOTE") return node;
		}
	};
	var post_is_floating = function (post) {
		var n = post.parentNode;
		return (
			post.id === "quote-preview" ||
			post.id === "qp" ||
			(n !== null && (
				n.id === "quote-preview" ||
				n.id === "qp"
			))
		);
	};

	var get_body_post_nodes = function () {
		return $$(".postContainer");
	};
	var get_all_post_nodes = function (container) {
		return $$(".postContainer,.post.inlined,#quote-preview", container);
	};
	var is_post = function (node) {
		var selector = ".postContainer,.post.inlined,#quote-preview";
		try {
			return node.matches ? node.matches(selector) : node.matchesSelector(selector);
		}
		catch (e) {}
		return false;
	};
	var is_post_group_container = function (node) {
		return node.id === "qp" || node.classList.contains("thread") || node.classList.contains("inline");
	};

	var get_header_height = function () {
		var n;
		if ((n = $("#header-bar")) !== null || (n = $("#boardNavMobile")) !== null) {
			return n.getBoundingClientRect().height;
		}
		return 0;
	};

	var update_indicators_scroll = function () {
		var body = document.body,
			doc_el = document.documentElement,
			scroll_y = (window.pageYOffset || doc_el.scrollTop || 0),
			scroll_end = scroll_y + (window.innerHeight || 0),
			height = Math.max(body.scrollHeight || 0, body.offsetHeight || 0, doc_el.clientHeight || 0, doc_el.scrollHeight || 0, doc_el.offsetHeight || 0),
			ii = all_posts.length,
			i_start, i_end, i, s, e;

		// Find start
		i_start = Math.max(0, Math.min(ii - 1, Math.floor(scroll_y / height * ii)));
		if (i_start > 0 && all_posts[i_start].rect.top > scroll_y) {
			while (--i_start > 0 && all_posts[i_start].rect.top > scroll_y);
		}
		else {
			while (++i_start < ii) {
				if (all_posts[i_start].rect.top > scroll_y) {
					--i_start;
					break;
				}
			}
		}

		// Find end
		for (i_end = i_start; i_end < ii; ++i_end) {
			if (all_posts[i_end].rect.top >= scroll_end) break;
		}

		// Disable
		s = scroll_range_pre[0];
		e = scroll_range_pre[1];
		if (i_start === s && i_end === s) return;
		e = Math.min(ii, e);
		if (s < i_start) {
			ii = Math.min(i_start, e);
			for (i = s; i < ii; ++i) {
				all_posts[i].indicator.classList.remove("hm_indicator_active");
			}
		}
		for (i = Math.min(all_posts.length, Math.max(i_end, s)); i < e; ++i) {
			all_posts[i].indicator.classList.remove("hm_indicator_active");
		}

		// Enable
		scroll_range_pre[0] = i_start;
		scroll_range_pre[1] = i_end;
		for (; i_start < i_end; ++i_start) {
			all_posts[i_start].indicator.classList.add("hm_indicator_active");
		}
	};

	var get_computed_style = function (node) {
		try {
			return document.defaultView.getComputedStyle(node);
		}
		catch (e) {}
		return node.style;
	};
	var set_highlight_count = function (node, add) {
		var a = "data-hm-highlight-count",
			v = parseInt(node.getAttribute(a) || "", 10) || 0;

		v += add;
		if (v > 0) {
			node.setAttribute(a, v);
		}
		else {
			node.removeAttribute(a);
			v = 0;
		}
		return v;
	};

	var create_styles = function (s) {
		var n = $.node_simple("style");
		n.textContent = s;
		$.add(document.head, n);
	};

	var on_body_observe = function (records) {
		var added_count = 0,
			removed_nodes = null,
			nodes, node, ns, i, ii, j, jj, k, kk;

		for (i = 0, ii = records.length; i < ii; ++i) {
			nodes = records[i].addedNodes;
			if (nodes) {
				// Find posts
				for (j = 0, jj = nodes.length; j < jj; ++j) {
					node = nodes[j];
					if (node.nodeType === Node.ELEMENT_NODE) {
						if (is_post(node)) {
							post_queue.push(node);
							++added_count;
						}
						else if (is_post_group_container(node)) {
							ns = get_all_post_nodes(node);
							for (k = 0, kk = ns.length; k < kk; ++k) {
								post_queue.push(ns[k]);
							}
							added_count += kk;
						}
					}
				}
			}
			nodes = records[i].removedNodes;
			if (nodes) {
				// Find posts
				for (j = 0, jj = nodes.length; j < jj; ++j) {
					node = nodes[j];
					if (node.nodeType === Node.ELEMENT_NODE) {
						if (is_post(node)) {
							if (removed_nodes === null) removed_nodes = [];
							removed_nodes.push(node);
						}
						else if (is_post_group_container(node)) {
							ns = get_all_post_nodes(node);
							if (ns.length > 0) {
								if (removed_nodes === null) removed_nodes = [];
								for (k = 0, kk = ns.length; k < kk; ++k) {
									removed_nodes.push(ns[k]);
								}
							}
						}
					}
				}
			}
		}

		if (added_count > 0) {
			start_post_queue();
		}
		if (removed_nodes !== null) {
			try {
			process_removed_posts(removed_nodes);
			}catch(e){console.log(e);}
		}
	};

	var on_window_resize = function () {
		var html_rect = document.documentElement.getBoundingClientRect();
		update_all_post_indicators(html_rect); // not necessary unless total height has changed
		update_heat_container_size(html_rect);
	};
	var on_window_scroll = function () {
		update_indicators_scroll();
	};

	var on_indicator_click = function (event, data) {
		if (typeof(event.which) === "number" && event.which !== 1) return;

		var n = data.post,
			r = n.getBoundingClientRect(),
			win_height = window.innerHeight || 0,
			n2;

		window.scrollBy(0, r.top - get_header_height() - Math.max(0, (win_height - r.height) / 2.0));

		if ((n2 = $(".post", n)) !== null && n2.parentNode === n) {
			n = n2;
		}

		set_highlight_count(n, 1);
		n.style.setProperty("box-shadow", "0 0 0.5em 1em " + data.color, "important");
		n.style.setProperty("z-index", "1", "important");
		n.style.setProperty("transition", "none", "important");
		get_computed_style(n).getPropertyValue("background-color");
		n.style.setProperty("transition", "");
		n.style.setProperty("box-shadow", "");
		n.style.setProperty("z-index", "");
		setTimeout(function () { set_highlight_count(n, -1); }, 1000);

		event.preventDefault();
		event.stopPropagation();
		return false;
	};

	var setup = function () {
		if (is_setup) return;
		is_setup = true;

		create_styles([ //{
			"body,#header-bar #shortcuts,#boardNavMobile .pageJump{margin-right:4px;}",
			".hm_container{position:fixed;top:0;right:0;bottom:0;pointer-events:none;width:4px;z-index:9002;transition:width 0.125s ease-in-out 0s;}",
			".hm_container:hover{width:8px;}",
			".hm_container_inner{transform-origin:0 0;width:100%;}",
			".hm_indicator{display:block;margin:0;padding:0;position:absolute;right:0;width:100%;pointer-events:auto;cursor:pointer;transition:width 0.125s ease-in-out 0s;}",
			".hm_indicator.hm_indicator_active{width:150%;}",
			".hm_indicator:hover{width:200%;z-index:1;}",
			"div[data-hm-highlight-count]{position:relative;transition:box-shadow 1s ease-in 0s,z-index 1s linear 0s;}",
		].join("")); //}

		var n1 = $.node("div", "hm_container"),
			n2 = $.node("div", "hm_container_inner");

		$.add(n1, n2);
		$.add(document.body, n1);
		node_heat_container = n1;
		node_heat_container_inner = n2;

		window.addEventListener("resize", on_window_resize, false);
		window.addEventListener("scroll", on_window_scroll, false);
	};

	var init = function () {
		post_queue = Array.prototype.slice.call(get_body_post_nodes(), 0);

		new MutationObserver(on_body_observe).observe(document.body, { childList: true, subtree: true });

		if (post_queue.length > 0) {
			start_post_queue();
			setTimeout(function () { on_window_resize(); }, 1000);
		}
	};


	$.ready(init);

})();

