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
    describe('MigrateRepoOptions', function() {
      beforeEach(function() {
        instance = new dcs.MigrateRepoOptions();
      });

      it('should create an instance of MigrateRepoOptions', function() {
        // TODO: update the code to test MigrateRepoOptions
        expect(instance).to.be.a(dcs.MigrateRepoOptions);
      });

      it('should have the property authPassword (base name: "auth_password")', function() {
        // TODO: update the code to test the property authPassword
        expect(instance).to.have.property('authPassword');
        // expect(instance.authPassword).to.be(expectedValueLiteral);
      });

      it('should have the property authToken (base name: "auth_token")', function() {
        // TODO: update the code to test the property authToken
        expect(instance).to.have.property('authToken');
        // expect(instance.authToken).to.be(expectedValueLiteral);
      });

      it('should have the property authUsername (base name: "auth_username")', function() {
        // TODO: update the code to test the property authUsername
        expect(instance).to.have.property('authUsername');
        // expect(instance.authUsername).to.be(expectedValueLiteral);
      });

      it('should have the property cloneAddr (base name: "clone_addr")', function() {
        // TODO: update the code to test the property cloneAddr
        expect(instance).to.have.property('cloneAddr');
        // expect(instance.cloneAddr).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property issues (base name: "issues")', function() {
        // TODO: update the code to test the property issues
        expect(instance).to.have.property('issues');
        // expect(instance.issues).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property lfs (base name: "lfs")', function() {
        // TODO: update the code to test the property lfs
        expect(instance).to.have.property('lfs');
        // expect(instance.lfs).to.be(expectedValueLiteral);
      });

      it('should have the property lfsEndpoint (base name: "lfs_endpoint")', function() {
        // TODO: update the code to test the property lfsEndpoint
        expect(instance).to.have.property('lfsEndpoint');
        // expect(instance.lfsEndpoint).to.be(expectedValueLiteral);
      });

      it('should have the property milestones (base name: "milestones")', function() {
        // TODO: update the code to test the property milestones
        expect(instance).to.have.property('milestones');
        // expect(instance.milestones).to.be(expectedValueLiteral);
      });

      it('should have the property mirror (base name: "mirror")', function() {
        // TODO: update the code to test the property mirror
        expect(instance).to.have.property('mirror');
        // expect(instance.mirror).to.be(expectedValueLiteral);
      });

      it('should have the property mirrorInterval (base name: "mirror_interval")', function() {
        // TODO: update the code to test the property mirrorInterval
        expect(instance).to.have.property('mirrorInterval');
        // expect(instance.mirrorInterval).to.be(expectedValueLiteral);
      });

      it('should have the property _private (base name: "private")', function() {
        // TODO: update the code to test the property _private
        expect(instance).to.have.property('_private');
        // expect(instance._private).to.be(expectedValueLiteral);
      });

      it('should have the property pullRequests (base name: "pull_requests")', function() {
        // TODO: update the code to test the property pullRequests
        expect(instance).to.have.property('pullRequests');
        // expect(instance.pullRequests).to.be(expectedValueLiteral);
      });

      it('should have the property releases (base name: "releases")', function() {
        // TODO: update the code to test the property releases
        expect(instance).to.have.property('releases');
        // expect(instance.releases).to.be(expectedValueLiteral);
      });

      it('should have the property repoName (base name: "repo_name")', function() {
        // TODO: update the code to test the property repoName
        expect(instance).to.have.property('repoName');
        // expect(instance.repoName).to.be(expectedValueLiteral);
      });

      it('should have the property repoOwner (base name: "repo_owner")', function() {
        // TODO: update the code to test the property repoOwner
        expect(instance).to.have.property('repoOwner');
        // expect(instance.repoOwner).to.be(expectedValueLiteral);
      });

      it('should have the property service (base name: "service")', function() {
        // TODO: update the code to test the property service
        expect(instance).to.have.property('service');
        // expect(instance.service).to.be(expectedValueLiteral);
      });

      it('should have the property uid (base name: "uid")', function() {
        // TODO: update the code to test the property uid
        expect(instance).to.have.property('uid');
        // expect(instance.uid).to.be(expectedValueLiteral);
      });

      it('should have the property wiki (base name: "wiki")', function() {
        // TODO: update the code to test the property wiki
        expect(instance).to.have.property('wiki');
        // expect(instance.wiki).to.be(expectedValueLiteral);
      });

    });
  });

}));
