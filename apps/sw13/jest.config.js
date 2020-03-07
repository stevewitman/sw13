module.exports = {
  name: 'sw13',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw13',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
