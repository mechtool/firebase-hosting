import {trigger, animate, style, group, animateChild, state, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'absolute', width:'100%' })
            , { optional: true }),
        /* 2 */ group([  // block executes in parallel
                    query(':enter', [
                        style({ transform: 'translateX(100%)' }),
                        animate('400ms ease-in-out', style({ transform: 'translateX(0%)' }))
                    ], { optional: true }),
                    query(':leave', [
                        style({ transform: 'translateX(0%)' }),
                        animate('400ms ease-in-out', style({ transform: 'translateX(-100%)' }))
                    ], { optional: true })
        ])
    ])
]) ;
export const menuItemTransition = trigger('menuItemTransition', [
    transition('*<=>*', [
        query(':enter',
            [
                style({ opacity: 0, transform: 'translateY(-15px)' }),
                stagger('20ms',
                    animate('20ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                )
            ],
            { optional: true }
        ),
        query(':leave',             [
            style({ opacity: 1, transform: 'translateY(0px)' }),
            stagger('20ms',
                animate('20ms ease-out', style({ opacity: 0, transform: 'translateY(-15px)' }))
            )
        ],{
            optional: true
        })
    ])
]);
export const openCloseLocalMenu = trigger('openCloseLocalMenu', [
    state('open', style({width : '250px'})),
    state('close', style({width : '0px'})),
    transition('*<=> open', animate('300ms')),
    transition('*<=> close', animate('300ms')),

]) ;
