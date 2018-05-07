import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipmentService} from '../../services/equipment.service';
import {Equipment} from '../../shared/Equipment';

@Component({
  selector: 'ssi-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {
  newEquiForm: FormGroup;
  equipament: Equipment;
  datos = [
    {name: 'Equipo', value: 1},
    {name: 'Implemento', value: 2},
  ];

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private equipmentService: EquipmentService,
              private route: ActivatedRoute,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.equipament = {
      id: null,
      name: this.newEquiForm.value.name,
      description: this.newEquiForm.value.description,
      type: this.newEquiForm.value.type,
      image: this.newEquiForm.value.image.value
    };

    console.log('form', this.equipament);
    this.equipmentService.saveEquipament(this.equipament)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    this.router.navigate(['equipments']);
  }

  private processError(err) {
    console.log(err);
  }

  private createForm() {
    this.newEquiForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newEquiForm.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

  clearFile() {
    this.newEquiForm.get('image').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
