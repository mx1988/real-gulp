(function() {
  'use strict';

  angular
    .module('realGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
