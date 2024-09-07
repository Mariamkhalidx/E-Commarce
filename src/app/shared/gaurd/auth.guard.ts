import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let platfornid = inject(PLATFORM_ID);
  if(isPlatformBrowser(platfornid)){
    if(localStorage.getItem('userToken') !=null){
      return true;
  
    }else{
      _router.navigate(['/login'])
      return false;
  
    }
  }else{
    return false
  }
 
};
