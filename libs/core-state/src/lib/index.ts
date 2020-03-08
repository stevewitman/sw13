import { ActionReducerMap } from '@ngrx/store';

import * as fromProjects from  './projects-ngrx/projects.reducer';

export interface AppStata {
  projects: fromProjects.ProjectState
}

export const reducers: ActionReducerMap<AppState> ={
  projects: fromProjects.reducer
}
