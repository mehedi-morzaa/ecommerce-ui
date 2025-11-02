import { HtmlService } from './../../../services/html.service';
import { Component, OnInit, signal } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { ContactService } from '../../../services/contact.service';
import { Branch } from '../../../models/branch.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactSubject } from '../../../models/contact-subject.model';
import { HtmlContent } from '../../../models/html-content.model';

@Component({
  selector: 'page-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.page.html',
})
export class ContactPage implements OnInit {
  /* ========================================================
     🔧 CONSTRUCTOR & DEPENDENCY INJECTION
  ======================================================== */
  constructor(
    private branchService: BranchService,
    private contactService: ContactService,
    private htmlService:HtmlService,
    private fb: FormBuilder
  ) {}

  /* ========================================================
   🧩 PROPERTIES (State / Data)
======================================================== */
  branches = signal<Branch[] | null>(null);
  contactSubjects=signal<ContactSubject[]|null>(null);
  FAQContent = signal<HtmlContent[] | null>(null);
  contactForm!: FormGroup;

  /* ========================================================
   🛠️ METHODS
======================================================== */
  LoadBranches() {
    this.branchService.getOffices().subscribe({
      next: (res) => {
        if (res.success) {
          this.branches.set(res.data);
          console.log(res.data);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  LoadContactSubjects() {
    this.contactService.getContactSubjects().subscribe({
      next: (res) => {
        if (res.success) {
          this.contactSubjects.set(res.data);
          console.log(res.data);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  LoadFAQ() {
    this.htmlService.getListofContent(2,3,1).subscribe({
      next: (res) => {
        if (res.success) {
          this.FAQContent.set(res.data);
          console.log(res.data);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postContact(){
    console.log(this.contactForm.value)

    this.contactService.saveMessage(this.contactForm.value).subscribe({
    next: (res) =>{
      if(res.success){
        this.contactForm.reset({contactSubjectId:0});
        alert("Message Posted");
      }
      else{
        alert("Error");
      }
    },
    error: err => console.log(err)
  })
  }

  /* ========================================================
   🌀 LIFECYCLE HOOKS
======================================================== */
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      contactSubjectId: [0, [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.LoadBranches();
    this.LoadContactSubjects();
    this.LoadFAQ();
  }
}
