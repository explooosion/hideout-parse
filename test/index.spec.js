/* global describe, it, before */
import chai from 'chai';
import fs from 'fs';
import HideoutParse from '../lib/hideout-parse.js';

chai.expect();
const expect = chai.expect;

let file = {};

describe('Parse hideout', () => {
  before(() => {
    file = HideoutParse(fs.readFileSync('./test/test.hideout').toString());
  });
  describe('Pick up [Language]', () => {
    it('should has the Language value', () => {
      expect(file['Language']).to.be.equal('English');
    });
  });
  describe('Pick up [Hideout Name]', () => {
    it('should has the Hideout Name', () => {
      expect(file['Hideout Name']).to.be.equal('Excavated Hideout');
    });
  });
  describe('Pick up [Hideout Hash]', () => {
    it('should has the Hideout Hash', () => {
      expect(file['Hideout Hash']).to.be.equal('55535');
    });
  });
  describe('Pick up [Objects]', () => {
    it('should has the Objects', () => {
      expect(file['Objects']).length > 0;
    });
  });
});
