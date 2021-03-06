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
    describe('CreateReleaseOption', function() {
      beforeEach(function() {
        instance = new dcs.CreateReleaseOption();
      });

      it('should create an instance of CreateReleaseOption', function() {
        // TODO: update the code to test CreateReleaseOption
        expect(instance).to.be.a(dcs.CreateReleaseOption);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property draft (base name: "draft")', function() {
        // TODO: update the code to test the property draft
        expect(instance).to.have.property('draft');
        // expect(instance.draft).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property prerelease (base name: "prerelease")', function() {
        // TODO: update the code to test the property prerelease
        expect(instance).to.have.property('prerelease');
        // expect(instance.prerelease).to.be(expectedValueLiteral);
      });

      it('should have the property tagName (base name: "tag_name")', function() {
        // TODO: update the code to test the property tagName
        expect(instance).to.have.property('tagName');
        // expect(instance.tagName).to.be(expectedValueLiteral);
      });

      it('should have the property targetCommitish (base name: "target_commitish")', function() {
        // TODO: update the code to test the property targetCommitish
        expect(instance).to.have.property('targetCommitish');
        // expect(instance.targetCommitish).to.be(expectedValueLiteral);
      });

    });
  });

}));
