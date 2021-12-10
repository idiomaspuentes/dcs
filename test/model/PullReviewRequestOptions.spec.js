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
    describe('PullReviewRequestOptions', function() {
      beforeEach(function() {
        instance = new dcs.PullReviewRequestOptions();
      });

      it('should create an instance of PullReviewRequestOptions', function() {
        // TODO: update the code to test PullReviewRequestOptions
        expect(instance).to.be.a(dcs.PullReviewRequestOptions);
      });

      it('should have the property reviewers (base name: "reviewers")', function() {
        // TODO: update the code to test the property reviewers
        expect(instance).to.have.property('reviewers');
        // expect(instance.reviewers).to.be(expectedValueLiteral);
      });

      it('should have the property teamReviewers (base name: "team_reviewers")', function() {
        // TODO: update the code to test the property teamReviewers
        expect(instance).to.have.property('teamReviewers');
        // expect(instance.teamReviewers).to.be(expectedValueLiteral);
      });

    });
  });

}));
