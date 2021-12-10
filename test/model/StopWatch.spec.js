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
    describe('StopWatch', function() {
      beforeEach(function() {
        instance = new dcs.StopWatch();
      });

      it('should create an instance of StopWatch', function() {
        // TODO: update the code to test StopWatch
        expect(instance).to.be.a(dcs.StopWatch);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property issueIndex (base name: "issue_index")', function() {
        // TODO: update the code to test the property issueIndex
        expect(instance).to.have.property('issueIndex');
        // expect(instance.issueIndex).to.be(expectedValueLiteral);
      });

      it('should have the property issueTitle (base name: "issue_title")', function() {
        // TODO: update the code to test the property issueTitle
        expect(instance).to.have.property('issueTitle');
        // expect(instance.issueTitle).to.be(expectedValueLiteral);
      });

      it('should have the property repoName (base name: "repo_name")', function() {
        // TODO: update the code to test the property repoName
        expect(instance).to.have.property('repoName');
        // expect(instance.repoName).to.be(expectedValueLiteral);
      });

      it('should have the property repoOwnerName (base name: "repo_owner_name")', function() {
        // TODO: update the code to test the property repoOwnerName
        expect(instance).to.have.property('repoOwnerName');
        // expect(instance.repoOwnerName).to.be(expectedValueLiteral);
      });

      it('should have the property seconds (base name: "seconds")', function() {
        // TODO: update the code to test the property seconds
        expect(instance).to.have.property('seconds');
        // expect(instance.seconds).to.be(expectedValueLiteral);
      });

    });
  });

}));
