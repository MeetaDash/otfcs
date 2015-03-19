TBB.SelectPickerComponent = Ember.Component.extend
  didInsertElement: (params) -> $('#' + @selectId).selectpicker()
