/*
  Breakpoints.js
  version 2.0

  Creates handy events for your responsive design breakpoints

  Created by XOXCO
  https://github.com/xoxco

  Forked by Angel Custodio
  https://github.com/angelcustodio

  Documentation for this plugin lives here:
  https://github.com/angelcustodio/breakpoints

  Licensed under the MIT license:
  http://opensource.org/licenses/MIT

*/
(function($) {
  var lastwidth = 0,
      options;

  var updatebreakpoints = function() {
    var $window       = $(window),
        currentwidth  = $window.width(),
        done          = false,
        onlylargest   = options.distinct,
        prefix        = options.prefix + '-',
        target        = $(options.target),
        point,
        diff;

    for (point in options.breakpoints.sort(function(a,b) { return (b-a) })) {
      var breakpoint    = options.breakpoints[point],
          breakpointpre = options.breakpoints[point-1],
          bpclass       = prefix + breakpoint,
          newbp         = currentwidth >= breakpoint && lastwidth < breakpoint && !done,
          exitbp        = currentwidth < breakpoint && lastwidth >= breakpoint,
          enterbp       = onlylargest && currentwidth >= breakpoint &&
                          currentwidth < breakpointpre &&
                          lastwidth > currentwidth && lastwidth > 0 &&
                          !target.hasClass(bpclass);

      if (newbp) {
        if (onlylargest) {
          for (diff in options.breakpoints.sort(function(a,b) { return (b-a) })) {
            if (target.hasClass(prefix + options.breakpoints[diff])) {
              target.removeClass(prefix + options.breakpoints[diff]);
            }
          }
          done = true;
        }
        target.addClass(bpclass);
      }

      if (exitbp) {
        target.removeClass(bpclass);
      }

      if (enterbp) {
        target.addClass(bpclass);
      }
    }

    if (lastwidth != currentwidth) {
      lastwidth = currentwidth;
    }
  };

  $.fn.applybreakpoints = function() {
    $(window).resize(updatebreakpoints);
    updatebreakpoints();
  };

  $.fn.setbreakpoints = function(settings) {
    options = $.extend({
                distinct: true,
                prefix: 'breakpoints',
                target: 'body',
                breakpoints: new Array(320,480,768,1024)
    }, settings);
    this.applybreakpoints();
  };

})($);
