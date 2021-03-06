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
    describe('GenerateRepoOption', function() {
      beforeEach(function() {
        instance = new dcs.GenerateRepoOption();
      });

      it('should create an instance of GenerateRepoOption', function() {
        // TODO: update the code to test GenerateRepoOption
        expect(instance).to.be.a(dcs.GenerateRepoOption);
      });

      it('should have the property avatar (base name: "avatar")', function() {
        // TODO: update the code to test the property avatar
        expect(instance).to.have.property('avatar');
        // expect(instance.avatar).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property gitContent (base name: "git_content")', function() {
        // TODO: update the code to test the property gitContent
        expect(instance).to.have.property('gitContent');
        // expect(instance.gitContent).to.be(expectedValueLiteral);
      });

      it('should have the property gitHooks (base name: "git_hooks")', function() {
        // TODO: update the code to test the property gitHooks
        expect(instance).to.have.property('gitHooks');
        // expect(instance.gitHooks).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "owner")', function() {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property('owner');
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property _private (base name: "private")', function() {
        // TODO: update the code to test the property _private
        expect(instance).to.have.property('_private');
        // expect(instance._private).to.be(expectedValueLiteral);
      });

      it('should have the property topics (base name: "topics")', function() {
        // TODO: update the code to test the property topics
        expect(instance).to.have.property('topics');
        // expect(instance.topics).to.be(expectedValueLiteral);
      });

      it('should have the property webhooks (base name: "webhooks")', function() {
        // TODO: update the code to test the property webhooks
        expect(instance).to.have.property('webhooks');
        // expect(instance.webhooks).to.be(expectedValueLiteral);
      });

    });
  });

}));
