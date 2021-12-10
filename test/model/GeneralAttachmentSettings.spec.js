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
    describe('GeneralAttachmentSettings', function() {
      beforeEach(function() {
        instance = new dcs.GeneralAttachmentSettings();
      });

      it('should create an instance of GeneralAttachmentSettings', function() {
        // TODO: update the code to test GeneralAttachmentSettings
        expect(instance).to.be.a(dcs.GeneralAttachmentSettings);
      });

      it('should have the property allowedTypes (base name: "allowed_types")', function() {
        // TODO: update the code to test the property allowedTypes
        expect(instance).to.have.property('allowedTypes');
        // expect(instance.allowedTypes).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property maxFiles (base name: "max_files")', function() {
        // TODO: update the code to test the property maxFiles
        expect(instance).to.have.property('maxFiles');
        // expect(instance.maxFiles).to.be(expectedValueLiteral);
      });

      it('should have the property maxSize (base name: "max_size")', function() {
        // TODO: update the code to test the property maxSize
        expect(instance).to.have.property('maxSize');
        // expect(instance.maxSize).to.be(expectedValueLiteral);
      });

    });
  });

}));
