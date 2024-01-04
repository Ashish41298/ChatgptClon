import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuserService } from './auser.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // Inject the dependencies
  const authService = inject(AuserService);
  const router = inject(Router);
    const cheker = authService.checkLogin();
  if(cheker == false){
    router.navigate(['/login']);
    return false;
  }else{
  }
  
  return true;
  // return authService.checkLogin().pipe(
  //   map(() => true),
  //   catchError(() => {
  //     // Redirect to login page if not authenticated
  //     return router.createUrlTree(['/login']);
  //   })
  // );
};
