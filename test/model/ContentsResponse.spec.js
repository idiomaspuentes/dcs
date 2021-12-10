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
    describe('ContentsResponse', function() {
      beforeEach(function() {
        instance = new dcs.ContentsResponse();
      });

      it('should create an instance of ContentsResponse', function() {
        // TODO: update the code to test ContentsResponse
        expect(instance).to.be.a(dcs.ContentsResponse);
      });

      it('should have the property links (base name: "_links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

      it('should have the property downloadUrl (base name: "download_url")', function() {
        // TODO: update the code to test the property downloadUrl
        expect(instance).to.have.property('downloadUrl');
        // expect(instance.downloadUrl).to.be(expectedValueLiteral);
      });

      it('should have the property encoding (base name: "encoding")', function() {
        // TODO: update the code to test the property encoding
        expect(instance).to.have.property('encoding');
        // expect(instance.encoding).to.be(expectedValueLiteral);
      });

      it('should have the property gitUrl (base name: "git_url")', function() {
        // TODO: update the code to test the property gitUrl
        expect(instance).to.have.property('gitUrl');
        // expect(instance.gitUrl).to.be(expectedValueLiteral);
      });

      it('should have the property htmlUrl (base name: "html_url")', function() {
        // TODO: update the code to test the property htmlUrl
        expect(instance).to.have.property('htmlUrl');
        // expect(instance.htmlUrl).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property sha (base name: "sha")', function() {
        // TODO: update the code to test the property sha
        expect(instance).to.have.property('sha');
        // expect(instance.sha).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property submoduleGitUrl (base name: "submodule_git_url")', function() {
        // TODO: update the code to test the property submoduleGitUrl
        expect(instance).to.have.property('submoduleGitUrl');
        // expect(instance.submoduleGitUrl).to.be(expectedValueLiteral);
      });

      it('should have the property target (base name: "target")', function() {
        // TODO: update the code to test the property target
        expect(instance).to.have.property('target');
        // expect(instance.target).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));
