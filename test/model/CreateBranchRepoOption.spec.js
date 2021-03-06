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
    describe('CreateBranchRepoOption', function() {
      beforeEach(function() {
        instance = new dcs.CreateBranchRepoOption();
      });

      it('should create an instance of CreateBranchRepoOption', function() {
        // TODO: update the code to test CreateBranchRepoOption
        expect(instance).to.be.a(dcs.CreateBranchRepoOption);
      });

      it('should have the property newBranchName (base name: "new_branch_name")', function() {
        // TODO: update the code to test the property newBranchName
        expect(instance).to.have.property('newBranchName');
        // expect(instance.newBranchName).to.be(expectedValueLiteral);
      });

      it('should have the property oldBranchName (base name: "old_branch_name")', function() {
        // TODO: update the code to test the property oldBranchName
        expect(instance).to.have.property('oldBranchName');
        // expect(instance.oldBranchName).to.be(expectedValueLiteral);
      });

    });
  });

}));
