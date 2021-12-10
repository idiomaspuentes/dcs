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
    describe('CreateUserOption', function() {
      beforeEach(function() {
        instance = new dcs.CreateUserOption();
      });

      it('should create an instance of CreateUserOption', function() {
        // TODO: update the code to test CreateUserOption
        expect(instance).to.be.a(dcs.CreateUserOption);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property fullName (base name: "full_name")', function() {
        // TODO: update the code to test the property fullName
        expect(instance).to.have.property('fullName');
        // expect(instance.fullName).to.be(expectedValueLiteral);
      });

      it('should have the property loginName (base name: "login_name")', function() {
        // TODO: update the code to test the property loginName
        expect(instance).to.have.property('loginName');
        // expect(instance.loginName).to.be(expectedValueLiteral);
      });

      it('should have the property mustChangePassword (base name: "must_change_password")', function() {
        // TODO: update the code to test the property mustChangePassword
        expect(instance).to.have.property('mustChangePassword');
        // expect(instance.mustChangePassword).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property sendNotify (base name: "send_notify")', function() {
        // TODO: update the code to test the property sendNotify
        expect(instance).to.have.property('sendNotify');
        // expect(instance.sendNotify).to.be(expectedValueLiteral);
      });

      it('should have the property sourceId (base name: "source_id")', function() {
        // TODO: update the code to test the property sourceId
        expect(instance).to.have.property('sourceId');
        // expect(instance.sourceId).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property visibility (base name: "visibility")', function() {
        // TODO: update the code to test the property visibility
        expect(instance).to.have.property('visibility');
        // expect(instance.visibility).to.be(expectedValueLiteral);
      });

    });
  });

}));
