import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-layout-toolbar',
  imports: [ToolbarModule, ButtonModule, InputTextModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class LayoutToolbar {}
