import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StationDetailsComponent } from './stationDetails/stationDetails.component';
import { TrainScheduleDialogComponent } from './trainSchedule/trainScheduleDialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainService } from './services/trains/trainService';
import { ApiClient } from './services/common/apiClient';

import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { TrainMovementService } from './services/trainMovements/trainMovementService';
import { StationService } from './services/stations/stationService';
import { StationDetailsService } from './services/stationDetails/stationDetailsService';

@NgModule({
    declarations: [
        AppComponent,
        TrainScheduleDialogComponent,
        StationDetailsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSliderModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatMenuModule
    ],
    providers: [
        ApiClient,
        TrainService,
        TrainMovementService,
        StationService,
        StationDetailsService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
