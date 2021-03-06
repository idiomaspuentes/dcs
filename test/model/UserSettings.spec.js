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
    describe('UserSettings', function() {
      beforeEach(function() {
        instance = new dcs.UserSettings();
      });

      it('should create an instance of UserSettings', function() {
        // TODO: update the code to test UserSettings
        expect(instance).to.be.a(dcs.UserSettings);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property diffViewStyle (base name: "diff_view_style")', function() {
        // TODO: update the code to test the property diffViewStyle
        expect(instance).to.have.property('diffViewStyle');
        // expect(instance.diffViewStyle).to.be(expectedValueLiteral);
      });

      it('should have the property fullName (base name: "full_name")', function() {
        // TODO: update the code to test the property fullName
        expect(instance).to.have.property('fullName');
        // expect(instance.fullName).to.be(expectedValueLiteral);
      });

      it('should have the property hideActivity (base name: "hide_activity")', function() {
        // TODO: update the code to test the property hideActivity
        expect(instance).to.have.property('hideActivity');
        // expect(instance.hideActivity).to.be(expectedValueLiteral);
      });

      it('should have the property hideEmail (base name: "hide_email")', function() {
        // TODO: update the code to test the property hideEmail
        expect(instance).to.have.property('hideEmail');
        // expect(instance.hideEmail).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property location (base name: "location")', function() {
        // TODO: update the code to test the property location
        expect(instance).to.have.property('location');
        // expect(instance.location).to.be(expectedValueLiteral);
      });

      it('should have the property theme (base name: "theme")', function() {
        // TODO: update the code to test the property theme
        expect(instance).to.have.property('theme');
        // expect(instance.theme).to.be(expectedValueLiteral);
      });

      it('should have the property website (base name: "website")', function() {
        // TODO: update the code to test the property website
        expect(instance).to.have.property('website');
        // expect(instance.website).to.be(expectedValueLiteral);
      });

    });
  });

}));
