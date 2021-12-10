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
    describe('AddCollaboratorOption', function() {
      beforeEach(function() {
        instance = new dcs.AddCollaboratorOption();
      });

      it('should create an instance of AddCollaboratorOption', function() {
        // TODO: update the code to test AddCollaboratorOption
        expect(instance).to.be.a(dcs.AddCollaboratorOption);
      });

      it('should have the property permission (base name: "permission")', function() {
        // TODO: update the code to test the property permission
        expect(instance).to.have.property('permission');
        // expect(instance.permission).to.be(expectedValueLiteral);
      });

    });
  });

}));
