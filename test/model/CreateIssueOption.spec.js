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
    describe('CreateIssueOption', function() {
      beforeEach(function() {
        instance = new dcs.CreateIssueOption();
      });

      it('should create an instance of CreateIssueOption', function() {
        // TODO: update the code to test CreateIssueOption
        expect(instance).to.be.a(dcs.CreateIssueOption);
      });

      it('should have the property assignee (base name: "assignee")', function() {
        // TODO: update the code to test the property assignee
        expect(instance).to.have.property('assignee');
        // expect(instance.assignee).to.be(expectedValueLiteral);
      });

      it('should have the property assignees (base name: "assignees")', function() {
        // TODO: update the code to test the property assignees
        expect(instance).to.have.property('assignees');
        // expect(instance.assignees).to.be(expectedValueLiteral);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property closed (base name: "closed")', function() {
        // TODO: update the code to test the property closed
        expect(instance).to.have.property('closed');
        // expect(instance.closed).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "due_date")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property milestone (base name: "milestone")', function() {
        // TODO: update the code to test the property milestone
        expect(instance).to.have.property('milestone');
        // expect(instance.milestone).to.be(expectedValueLiteral);
      });

      it('should have the property ref (base name: "ref")', function() {
        // TODO: update the code to test the property ref
        expect(instance).to.have.property('ref');
        // expect(instance.ref).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

    });
  });

}));