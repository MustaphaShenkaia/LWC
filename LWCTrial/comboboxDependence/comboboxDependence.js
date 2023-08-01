import { LightningElement, track } from 'lwc';

export default class ComboboxDependence extends LightningElement {

    @track selectedParentValue = '';
    @track selectedDependentValue = '';
    @track parentOptions = [
        { label: 'Honda', value: 'Honda' },
        { label: 'Ford', value: 'Ford' },
    ];
    @track dependentOptions = [];

    handleParentChange(event) {
        this.selectedParentValue = event.detail.value;
        this.updateDependentOptions();
      }
    
      updateDependentOptions() {
        // Perform the logic to filter the dependent options based on the selected parent value
        // For example:
        if (this.selectedParentValue === 'Honda') {
          this.dependentOptions = [
            { label: 'Civic', value: 'Civic' },
            { label: 'Jazz', value: 'Jazz' },
            { label: 'City', value: 'City' },
          ];
        } else if (this.selectedParentValue === 'Ford') {
          this.dependentOptions = [
            { label: 'Fiesta', value: 'Fiesta' },
            { label: 'Focus', value: 'Focus' },
            { label: 'Puma', value: 'Puma' },
          ];
        } else {
          // Default case, no dependent options for the unselected parent value
          this.dependentOptions = [];
        }
    
        // Reset the selected value of the dependent combobox when parent value changes
        this.selectedDependentValue = '';
      }
}