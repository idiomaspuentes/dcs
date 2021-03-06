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
    describe('CreateTagOption', function() {
      beforeEach(function() {
        instance = new dcs.CreateTagOption();
      });

      it('should create an instance of CreateTagOption', function() {
        // TODO: update the code to test CreateTagOption
        expect(instance).to.be.a(dcs.CreateTagOption);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property tagName (base name: "tag_name")', function() {
        // TODO: update the code to test the property tagName
        expect(instance).to.have.property('tagName');
        // expect(instance.tagName).to.be(expectedValueLiteral);
      });

      it('should have the property target (base name: "target")', function() {
        // TODO: update the code to test the property target
        expect(instance).to.have.property('target');
        // expect(instance.target).to.be(expectedValueLiteral);
      });

    });
  });

}));
