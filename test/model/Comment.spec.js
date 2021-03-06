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
    describe('Comment', function() {
      beforeEach(function() {
        instance = new dcs.Comment();
      });

      it('should create an instance of Comment', function() {
        // TODO: update the code to test Comment
        expect(instance).to.be.a(dcs.Comment);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property htmlUrl (base name: "html_url")', function() {
        // TODO: update the code to test the property htmlUrl
        expect(instance).to.have.property('htmlUrl');
        // expect(instance.htmlUrl).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property issueUrl (base name: "issue_url")', function() {
        // TODO: update the code to test the property issueUrl
        expect(instance).to.have.property('issueUrl');
        // expect(instance.issueUrl).to.be(expectedValueLiteral);
      });

      it('should have the property originalAuthor (base name: "original_author")', function() {
        // TODO: update the code to test the property originalAuthor
        expect(instance).to.have.property('originalAuthor');
        // expect(instance.originalAuthor).to.be(expectedValueLiteral);
      });

      it('should have the property originalAuthorId (base name: "original_author_id")', function() {
        // TODO: update the code to test the property originalAuthorId
        expect(instance).to.have.property('originalAuthorId');
        // expect(instance.originalAuthorId).to.be(expectedValueLiteral);
      });

      it('should have the property pullRequestUrl (base name: "pull_request_url")', function() {
        // TODO: update the code to test the property pullRequestUrl
        expect(instance).to.have.property('pullRequestUrl');
        // expect(instance.pullRequestUrl).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
