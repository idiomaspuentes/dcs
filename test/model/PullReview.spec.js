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
    describe('PullReview', function() {
      beforeEach(function() {
        instance = new dcs.PullReview();
      });

      it('should create an instance of PullReview', function() {
        // TODO: update the code to test PullReview
        expect(instance).to.be.a(dcs.PullReview);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property commentsCount (base name: "comments_count")', function() {
        // TODO: update the code to test the property commentsCount
        expect(instance).to.have.property('commentsCount');
        // expect(instance.commentsCount).to.be(expectedValueLiteral);
      });

      it('should have the property commitId (base name: "commit_id")', function() {
        // TODO: update the code to test the property commitId
        expect(instance).to.have.property('commitId');
        // expect(instance.commitId).to.be(expectedValueLiteral);
      });

      it('should have the property dismissed (base name: "dismissed")', function() {
        // TODO: update the code to test the property dismissed
        expect(instance).to.have.property('dismissed');
        // expect(instance.dismissed).to.be(expectedValueLiteral);
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

      it('should have the property official (base name: "official")', function() {
        // TODO: update the code to test the property official
        expect(instance).to.have.property('official');
        // expect(instance.official).to.be(expectedValueLiteral);
      });

      it('should have the property pullRequestUrl (base name: "pull_request_url")', function() {
        // TODO: update the code to test the property pullRequestUrl
        expect(instance).to.have.property('pullRequestUrl');
        // expect(instance.pullRequestUrl).to.be(expectedValueLiteral);
      });

      it('should have the property stale (base name: "stale")', function() {
        // TODO: update the code to test the property stale
        expect(instance).to.have.property('stale');
        // expect(instance.stale).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property submittedAt (base name: "submitted_at")', function() {
        // TODO: update the code to test the property submittedAt
        expect(instance).to.have.property('submittedAt');
        // expect(instance.submittedAt).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
