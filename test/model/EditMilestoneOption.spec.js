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
    describe('EditMilestoneOption', function() {
      beforeEach(function() {
        instance = new dcs.EditMilestoneOption();
      });

      it('should create an instance of EditMilestoneOption', function() {
        // TODO: update the code to test EditMilestoneOption
        expect(instance).to.be.a(dcs.EditMilestoneOption);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property dueOn (base name: "due_on")', function() {
        // TODO: update the code to test the property dueOn
        expect(instance).to.have.property('dueOn');
        // expect(instance.dueOn).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

    });
  });

}));
