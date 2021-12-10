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
    describe('ExternalTracker', function() {
      beforeEach(function() {
        instance = new dcs.ExternalTracker();
      });

      it('should create an instance of ExternalTracker', function() {
        // TODO: update the code to test ExternalTracker
        expect(instance).to.be.a(dcs.ExternalTracker);
      });

      it('should have the property externalTrackerFormat (base name: "external_tracker_format")', function() {
        // TODO: update the code to test the property externalTrackerFormat
        expect(instance).to.have.property('externalTrackerFormat');
        // expect(instance.externalTrackerFormat).to.be(expectedValueLiteral);
      });

      it('should have the property externalTrackerStyle (base name: "external_tracker_style")', function() {
        // TODO: update the code to test the property externalTrackerStyle
        expect(instance).to.have.property('externalTrackerStyle');
        // expect(instance.externalTrackerStyle).to.be(expectedValueLiteral);
      });

      it('should have the property externalTrackerUrl (base name: "external_tracker_url")', function() {
        // TODO: update the code to test the property externalTrackerUrl
        expect(instance).to.have.property('externalTrackerUrl');
        // expect(instance.externalTrackerUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
