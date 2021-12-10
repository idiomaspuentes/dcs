/*
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.15.6a+dcs
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.dcs);
  }
}(this, function(expect, dcs) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InternalTracker', function() {
      beforeEach(function() {
        instance = new dcs.InternalTracker();
      });

      it('should create an instance of InternalTracker', function() {
        // TODO: update the code to test InternalTracker
        expect(instance).to.be.a(dcs.InternalTracker);
      });

      it('should have the property allowOnlyContributorsToTrackTime (base name: "allow_only_contributors_to_track_time")', function() {
        // TODO: update the code to test the property allowOnlyContributorsToTrackTime
        expect(instance).to.have.property('allowOnlyContributorsToTrackTime');
        // expect(instance.allowOnlyContributorsToTrackTime).to.be(expectedValueLiteral);
      });

      it('should have the property enableIssueDependencies (base name: "enable_issue_dependencies")', function() {
        // TODO: update the code to test the property enableIssueDependencies
        expect(instance).to.have.property('enableIssueDependencies');
        // expect(instance.enableIssueDependencies).to.be(expectedValueLiteral);
      });

      it('should have the property enableTimeTracker (base name: "enable_time_tracker")', function() {
        // TODO: update the code to test the property enableTimeTracker
        expect(instance).to.have.property('enableTimeTracker');
        // expect(instance.enableTimeTracker).to.be(expectedValueLiteral);
      });

    });
  });

}));
