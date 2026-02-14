import { Component, computed, input, OnInit, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TaskStatus } from '../../../core/types';
import { ALL } from '../../../core/consts/task-status.const';

@Component({
  selector: 'app-dashboard-task-menubar',
  imports: [MenubarModule, ButtonModule],
  templateUrl: './task-menubar.html',
  styleUrl: './task-menubar.scss',
})
export class TaskMenubar {
  selectedList = output<TaskStatus | null>();
  availableTaskLists = input.required<Record<TaskStatus, string>>();

  items = computed(() => {
    const lists = this.availableTaskLists();

    const entries = Object.entries(lists) as [TaskStatus, string][];

    const menuItems: MenuItem[] = entries.map(([status, label]) => ({
      id: status,
      label,
      command: () => this.setActiveItem(status),
    }));

    // Add "All" only if more than 1 list exists
    if (menuItems.length > 1) {
      menuItems.unshift({
        id: ALL,
        label: 'All',
        command: () => this.setActiveItem(),
        styleClass: 'active-item',
      });
    } else if (menuItems.length === 1) {
      // if only one item, mark it active by default
      menuItems[0].styleClass = 'active-item';
    }

    return menuItems;
  });

  setActiveItem(id?: TaskStatus) {
    this.items()?.forEach((item) => {
      if (item.id === id || (!id && item.id === ALL)) {
        item.styleClass = 'active-item';
      } else {
        item.styleClass = '';
      }
    });
    this.selectedList.emit(id ?? null);
  }
}
