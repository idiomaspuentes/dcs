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
    describe('GitTreeResponse', function() {
      beforeEach(function() {
        instance = new dcs.GitTreeResponse();
      });

      it('should create an instance of GitTreeResponse', function() {
        // TODO: update the code to test GitTreeResponse
        expect(instance).to.be.a(dcs.GitTreeResponse);
      });

      it('should have the property page (base name: "page")', function() {
        // TODO: update the code to test the property page
        expect(instance).to.have.property('page');
        // expect(instance.page).to.be(expectedValueLiteral);
      });

      it('should have the property sha (base name: "sha")', function() {
        // TODO: update the code to test the property sha
        expect(instance).to.have.property('sha');
        // expect(instance.sha).to.be(expectedValueLiteral);
      });

      it('should have the property totalCount (base name: "total_count")', function() {
        // TODO: update the code to test the property totalCount
        expect(instance).to.have.property('totalCount');
        // expect(instance.totalCount).to.be(expectedValueLiteral);
      });

      it('should have the property tree (base name: "tree")', function() {
        // TODO: update the code to test the property tree
        expect(instance).to.have.property('tree');
        // expect(instance.tree).to.be(expectedValueLiteral);
      });

      it('should have the property truncated (base name: "truncated")', function() {
        // TODO: update the code to test the property truncated
        expect(instance).to.have.property('truncated');
        // expect(instance.truncated).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));
