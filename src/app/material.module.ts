import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule {

}