const homeDictionary = new Map()
.set(
  'home privacy_policy',
  {name: 'privacy_policy_view', column: 'privacy_policy_id', type: 'json'}
)
.set(
  'home about_us',
  {name: 'about_us_view', column: 'about_us_id', type: 'json'}
)
.set(
  'home our_contacts',
  {name: 'our_contacts_view', column: 'our_contacts_id', type: 'json'}
);

module.exports = homeDictionary;