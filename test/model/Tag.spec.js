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
    describe('Tag', function() {
      beforeEach(function() {
        instance = new dcs.Tag();
      });

      it('should create an instance of Tag', function() {
        // TODO: update the code to test Tag
        expect(instance).to.be.a(dcs.Tag);
      });

      it('should have the property commit (base name: "commit")', function() {
        // TODO: update the code to test the property commit
        expect(instance).to.have.property('commit');
        // expect(instance.commit).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property tarballUrl (base name: "tarball_url")', function() {
        // TODO: update the code to test the property tarballUrl
        expect(instance).to.have.property('tarballUrl');
        // expect(instance.tarballUrl).to.be(expectedValueLiteral);
      });

      it('should have the property zipballUrl (base name: "zipball_url")', function() {
        // TODO: update the code to test the property zipballUrl
        expect(instance).to.have.property('zipballUrl');
        // expect(instance.zipballUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
