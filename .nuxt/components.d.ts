
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CldImage': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']
    'CldMediaLibrary': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']
    'CldOgImage': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']
    'CldProductGallery': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']
    'CldUploadButton': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']
    'CldUploadWidget': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']
    'CldVideoPlayer': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']
    'AuthState': typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Alert': typeof import("../components/ui/alert/index")['Alert']
    'AlertTitle': typeof import("../components/ui/alert/index")['AlertTitle']
    'AlertDescription': typeof import("../components/ui/alert/index")['AlertDescription']
    'Avatar': typeof import("../components/ui/avatar/index")['Avatar']
    'AvatarImage': typeof import("../components/ui/avatar/index")['AvatarImage']
    'AvatarFallback': typeof import("../components/ui/avatar/index")['AvatarFallback']
    'Badge': typeof import("../components/ui/badge/index")['Badge']
    'Button': typeof import("../components/ui/button/index")['Button']
    'Card': typeof import("../components/ui/card/index")['Card']
    'CardHeader': typeof import("../components/ui/card/index")['CardHeader']
    'CardTitle': typeof import("../components/ui/card/index")['CardTitle']
    'CardDescription': typeof import("../components/ui/card/index")['CardDescription']
    'CardContent': typeof import("../components/ui/card/index")['CardContent']
    'CardFooter': typeof import("../components/ui/card/index")['CardFooter']
    'Carousel': typeof import("../components/ui/carousel/index")['Carousel']
    'CarouselContent': typeof import("../components/ui/carousel/index")['CarouselContent']
    'CarouselItem': typeof import("../components/ui/carousel/index")['CarouselItem']
    'CarouselPrevious': typeof import("../components/ui/carousel/index")['CarouselPrevious']
    'CarouselNext': typeof import("../components/ui/carousel/index")['CarouselNext']
    'CarouselApi': typeof import("../components/ui/carousel/index")['CarouselApi']
    'Checkbox': typeof import("../components/ui/checkbox/index")['Checkbox']
    'Command': typeof import("../components/ui/command/index")['Command']
    'CommandDialog': typeof import("../components/ui/command/index")['CommandDialog']
    'CommandEmpty': typeof import("../components/ui/command/index")['CommandEmpty']
    'CommandGroup': typeof import("../components/ui/command/index")['CommandGroup']
    'CommandInput': typeof import("../components/ui/command/index")['CommandInput']
    'CommandItem': typeof import("../components/ui/command/index")['CommandItem']
    'CommandList': typeof import("../components/ui/command/index")['CommandList']
    'CommandSeparator': typeof import("../components/ui/command/index")['CommandSeparator']
    'CommandShortcut': typeof import("../components/ui/command/index")['CommandShortcut']
    'Dialog': typeof import("../components/ui/dialog/index")['Dialog']
    'DialogClose': typeof import("../components/ui/dialog/index")['DialogClose']
    'DialogTrigger': typeof import("../components/ui/dialog/index")['DialogTrigger']
    'DialogHeader': typeof import("../components/ui/dialog/index")['DialogHeader']
    'DialogTitle': typeof import("../components/ui/dialog/index")['DialogTitle']
    'DialogDescription': typeof import("../components/ui/dialog/index")['DialogDescription']
    'DialogContent': typeof import("../components/ui/dialog/index")['DialogContent']
    'DialogScrollContent': typeof import("../components/ui/dialog/index")['DialogScrollContent']
    'DialogFooter': typeof import("../components/ui/dialog/index")['DialogFooter']
    'DropdownMenuPortal': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'DropdownMenu': typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuLabel': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuSub': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'Form': typeof import("../components/ui/form/index")['Form']
    'FormField': typeof import("../components/ui/form/index")['FormField']
    'FormItem': typeof import("../components/ui/form/index")['FormItem']
    'FormLabel': typeof import("../components/ui/form/index")['FormLabel']
    'FormControl': typeof import("../components/ui/form/index")['FormControl']
    'FormMessage': typeof import("../components/ui/form/index")['FormMessage']
    'FormDescription': typeof import("../components/ui/form/index")['FormDescription']
    'FORMITEMINJECTIONKEY': typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
    'Input': typeof import("../components/ui/input/index")['Input']
    'Popover': typeof import("../components/ui/popover/index")['Popover']
    'PopoverTrigger': typeof import("../components/ui/popover/index")['PopoverTrigger']
    'PopoverContent': typeof import("../components/ui/popover/index")['PopoverContent']
    'Label': typeof import("../components/ui/label/index")['Label']
    'Select': typeof import("../components/ui/select/index")['Select']
    'SelectValue': typeof import("../components/ui/select/index")['SelectValue']
    'SelectTrigger': typeof import("../components/ui/select/index")['SelectTrigger']
    'SelectContent': typeof import("../components/ui/select/index")['SelectContent']
    'SelectGroup': typeof import("../components/ui/select/index")['SelectGroup']
    'SelectItem': typeof import("../components/ui/select/index")['SelectItem']
    'SelectItemText': typeof import("../components/ui/select/index")['SelectItemText']
    'SelectLabel': typeof import("../components/ui/select/index")['SelectLabel']
    'SelectSeparator': typeof import("../components/ui/select/index")['SelectSeparator']
    'SelectScrollUpButton': typeof import("../components/ui/select/index")['SelectScrollUpButton']
    'SelectScrollDownButton': typeof import("../components/ui/select/index")['SelectScrollDownButton']
    'Separator': typeof import("../components/ui/separator/index")['Separator']
    'Sheet': typeof import("../components/ui/sheet/index")['Sheet']
    'SheetTrigger': typeof import("../components/ui/sheet/index")['SheetTrigger']
    'SheetClose': typeof import("../components/ui/sheet/index")['SheetClose']
    'SheetContent': typeof import("../components/ui/sheet/index")['SheetContent']
    'SheetHeader': typeof import("../components/ui/sheet/index")['SheetHeader']
    'SheetTitle': typeof import("../components/ui/sheet/index")['SheetTitle']
    'SheetDescription': typeof import("../components/ui/sheet/index")['SheetDescription']
    'SheetFooter': typeof import("../components/ui/sheet/index")['SheetFooter']
    'Table': typeof import("../components/ui/table/index")['Table']
    'TableBody': typeof import("../components/ui/table/index")['TableBody']
    'TableCell': typeof import("../components/ui/table/index")['TableCell']
    'TableHead': typeof import("../components/ui/table/index")['TableHead']
    'TableHeader': typeof import("../components/ui/table/index")['TableHeader']
    'TableFooter': typeof import("../components/ui/table/index")['TableFooter']
    'TableRow': typeof import("../components/ui/table/index")['TableRow']
    'TableCaption': typeof import("../components/ui/table/index")['TableCaption']
    'TableEmpty': typeof import("../components/ui/table/index")['TableEmpty']
    'Toaster': typeof import("../components/ui/toast/index")['Toaster']
    'Toast': typeof import("../components/ui/toast/index")['Toast']
    'ToastViewport': typeof import("../components/ui/toast/index")['ToastViewport']
    'ToastAction': typeof import("../components/ui/toast/index")['ToastAction']
    'ToastClose': typeof import("../components/ui/toast/index")['ToastClose']
    'ToastTitle': typeof import("../components/ui/toast/index")['ToastTitle']
    'ToastDescription': typeof import("../components/ui/toast/index")['ToastDescription']
    'ToastProvider': typeof import("../components/ui/toast/index")['ToastProvider']
    'Tooltip': typeof import("../components/ui/tooltip/index")['Tooltip']
    'TooltipContent': typeof import("../components/ui/tooltip/index")['TooltipContent']
    'TooltipTrigger': typeof import("../components/ui/tooltip/index")['TooltipTrigger']
    'TooltipProvider': typeof import("../components/ui/tooltip/index")['TooltipProvider']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyCldImage': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']>
    'LazyCldMediaLibrary': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']>
    'LazyCldOgImage': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']>
    'LazyCldProductGallery': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']>
    'LazyCldUploadButton': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']>
    'LazyCldUploadWidget': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']>
    'LazyCldVideoPlayer': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']>
    'LazyAuthState': LazyComponent<typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyAlert': LazyComponent<typeof import("../components/ui/alert/index")['Alert']>
    'LazyAlertTitle': LazyComponent<typeof import("../components/ui/alert/index")['AlertTitle']>
    'LazyAlertDescription': LazyComponent<typeof import("../components/ui/alert/index")['AlertDescription']>
    'LazyAvatar': LazyComponent<typeof import("../components/ui/avatar/index")['Avatar']>
    'LazyAvatarImage': LazyComponent<typeof import("../components/ui/avatar/index")['AvatarImage']>
    'LazyAvatarFallback': LazyComponent<typeof import("../components/ui/avatar/index")['AvatarFallback']>
    'LazyBadge': LazyComponent<typeof import("../components/ui/badge/index")['Badge']>
    'LazyButton': LazyComponent<typeof import("../components/ui/button/index")['Button']>
    'LazyCard': LazyComponent<typeof import("../components/ui/card/index")['Card']>
    'LazyCardHeader': LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
    'LazyCardTitle': LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
    'LazyCardDescription': LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
    'LazyCardContent': LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
    'LazyCardFooter': LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
    'LazyCarousel': LazyComponent<typeof import("../components/ui/carousel/index")['Carousel']>
    'LazyCarouselContent': LazyComponent<typeof import("../components/ui/carousel/index")['CarouselContent']>
    'LazyCarouselItem': LazyComponent<typeof import("../components/ui/carousel/index")['CarouselItem']>
    'LazyCarouselPrevious': LazyComponent<typeof import("../components/ui/carousel/index")['CarouselPrevious']>
    'LazyCarouselNext': LazyComponent<typeof import("../components/ui/carousel/index")['CarouselNext']>
    'LazyCarouselApi': LazyComponent<typeof import("../components/ui/carousel/index")['CarouselApi']>
    'LazyCheckbox': LazyComponent<typeof import("../components/ui/checkbox/index")['Checkbox']>
    'LazyCommand': LazyComponent<typeof import("../components/ui/command/index")['Command']>
    'LazyCommandDialog': LazyComponent<typeof import("../components/ui/command/index")['CommandDialog']>
    'LazyCommandEmpty': LazyComponent<typeof import("../components/ui/command/index")['CommandEmpty']>
    'LazyCommandGroup': LazyComponent<typeof import("../components/ui/command/index")['CommandGroup']>
    'LazyCommandInput': LazyComponent<typeof import("../components/ui/command/index")['CommandInput']>
    'LazyCommandItem': LazyComponent<typeof import("../components/ui/command/index")['CommandItem']>
    'LazyCommandList': LazyComponent<typeof import("../components/ui/command/index")['CommandList']>
    'LazyCommandSeparator': LazyComponent<typeof import("../components/ui/command/index")['CommandSeparator']>
    'LazyCommandShortcut': LazyComponent<typeof import("../components/ui/command/index")['CommandShortcut']>
    'LazyDialog': LazyComponent<typeof import("../components/ui/dialog/index")['Dialog']>
    'LazyDialogClose': LazyComponent<typeof import("../components/ui/dialog/index")['DialogClose']>
    'LazyDialogTrigger': LazyComponent<typeof import("../components/ui/dialog/index")['DialogTrigger']>
    'LazyDialogHeader': LazyComponent<typeof import("../components/ui/dialog/index")['DialogHeader']>
    'LazyDialogTitle': LazyComponent<typeof import("../components/ui/dialog/index")['DialogTitle']>
    'LazyDialogDescription': LazyComponent<typeof import("../components/ui/dialog/index")['DialogDescription']>
    'LazyDialogContent': LazyComponent<typeof import("../components/ui/dialog/index")['DialogContent']>
    'LazyDialogScrollContent': LazyComponent<typeof import("../components/ui/dialog/index")['DialogScrollContent']>
    'LazyDialogFooter': LazyComponent<typeof import("../components/ui/dialog/index")['DialogFooter']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazyDropdownMenu': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyForm': LazyComponent<typeof import("../components/ui/form/index")['Form']>
    'LazyFormField': LazyComponent<typeof import("../components/ui/form/index")['FormField']>
    'LazyFormItem': LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
    'LazyFormLabel': LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
    'LazyFormControl': LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
    'LazyFormMessage': LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
    'LazyFormDescription': LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
    'LazyFORMITEMINJECTIONKEY': LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
    'LazyInput': LazyComponent<typeof import("../components/ui/input/index")['Input']>
    'LazyPopover': LazyComponent<typeof import("../components/ui/popover/index")['Popover']>
    'LazyPopoverTrigger': LazyComponent<typeof import("../components/ui/popover/index")['PopoverTrigger']>
    'LazyPopoverContent': LazyComponent<typeof import("../components/ui/popover/index")['PopoverContent']>
    'LazyLabel': LazyComponent<typeof import("../components/ui/label/index")['Label']>
    'LazySelect': LazyComponent<typeof import("../components/ui/select/index")['Select']>
    'LazySelectValue': LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
    'LazySelectTrigger': LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
    'LazySelectContent': LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
    'LazySelectGroup': LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
    'LazySelectItem': LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
    'LazySelectItemText': LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
    'LazySelectLabel': LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
    'LazySelectSeparator': LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
    'LazySelectScrollUpButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
    'LazySelectScrollDownButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
    'LazySeparator': LazyComponent<typeof import("../components/ui/separator/index")['Separator']>
    'LazySheet': LazyComponent<typeof import("../components/ui/sheet/index")['Sheet']>
    'LazySheetTrigger': LazyComponent<typeof import("../components/ui/sheet/index")['SheetTrigger']>
    'LazySheetClose': LazyComponent<typeof import("../components/ui/sheet/index")['SheetClose']>
    'LazySheetContent': LazyComponent<typeof import("../components/ui/sheet/index")['SheetContent']>
    'LazySheetHeader': LazyComponent<typeof import("../components/ui/sheet/index")['SheetHeader']>
    'LazySheetTitle': LazyComponent<typeof import("../components/ui/sheet/index")['SheetTitle']>
    'LazySheetDescription': LazyComponent<typeof import("../components/ui/sheet/index")['SheetDescription']>
    'LazySheetFooter': LazyComponent<typeof import("../components/ui/sheet/index")['SheetFooter']>
    'LazyTable': LazyComponent<typeof import("../components/ui/table/index")['Table']>
    'LazyTableBody': LazyComponent<typeof import("../components/ui/table/index")['TableBody']>
    'LazyTableCell': LazyComponent<typeof import("../components/ui/table/index")['TableCell']>
    'LazyTableHead': LazyComponent<typeof import("../components/ui/table/index")['TableHead']>
    'LazyTableHeader': LazyComponent<typeof import("../components/ui/table/index")['TableHeader']>
    'LazyTableFooter': LazyComponent<typeof import("../components/ui/table/index")['TableFooter']>
    'LazyTableRow': LazyComponent<typeof import("../components/ui/table/index")['TableRow']>
    'LazyTableCaption': LazyComponent<typeof import("../components/ui/table/index")['TableCaption']>
    'LazyTableEmpty': LazyComponent<typeof import("../components/ui/table/index")['TableEmpty']>
    'LazyToaster': LazyComponent<typeof import("../components/ui/toast/index")['Toaster']>
    'LazyToast': LazyComponent<typeof import("../components/ui/toast/index")['Toast']>
    'LazyToastViewport': LazyComponent<typeof import("../components/ui/toast/index")['ToastViewport']>
    'LazyToastAction': LazyComponent<typeof import("../components/ui/toast/index")['ToastAction']>
    'LazyToastClose': LazyComponent<typeof import("../components/ui/toast/index")['ToastClose']>
    'LazyToastTitle': LazyComponent<typeof import("../components/ui/toast/index")['ToastTitle']>
    'LazyToastDescription': LazyComponent<typeof import("../components/ui/toast/index")['ToastDescription']>
    'LazyToastProvider': LazyComponent<typeof import("../components/ui/toast/index")['ToastProvider']>
    'LazyTooltip': LazyComponent<typeof import("../components/ui/tooltip/index")['Tooltip']>
    'LazyTooltipContent': LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipContent']>
    'LazyTooltipTrigger': LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipTrigger']>
    'LazyTooltipProvider': LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipProvider']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CldImage: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']
export const CldMediaLibrary: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']
export const CldOgImage: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']
export const CldProductGallery: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']
export const CldUploadButton: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']
export const CldUploadWidget: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']
export const CldVideoPlayer: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']
export const AuthState: typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Alert: typeof import("../components/ui/alert/index")['Alert']
export const AlertTitle: typeof import("../components/ui/alert/index")['AlertTitle']
export const AlertDescription: typeof import("../components/ui/alert/index")['AlertDescription']
export const Avatar: typeof import("../components/ui/avatar/index")['Avatar']
export const AvatarImage: typeof import("../components/ui/avatar/index")['AvatarImage']
export const AvatarFallback: typeof import("../components/ui/avatar/index")['AvatarFallback']
export const Badge: typeof import("../components/ui/badge/index")['Badge']
export const Button: typeof import("../components/ui/button/index")['Button']
export const Card: typeof import("../components/ui/card/index")['Card']
export const CardHeader: typeof import("../components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../components/ui/card/index")['CardTitle']
export const CardDescription: typeof import("../components/ui/card/index")['CardDescription']
export const CardContent: typeof import("../components/ui/card/index")['CardContent']
export const CardFooter: typeof import("../components/ui/card/index")['CardFooter']
export const Carousel: typeof import("../components/ui/carousel/index")['Carousel']
export const CarouselContent: typeof import("../components/ui/carousel/index")['CarouselContent']
export const CarouselItem: typeof import("../components/ui/carousel/index")['CarouselItem']
export const CarouselPrevious: typeof import("../components/ui/carousel/index")['CarouselPrevious']
export const CarouselNext: typeof import("../components/ui/carousel/index")['CarouselNext']
export const CarouselApi: typeof import("../components/ui/carousel/index")['CarouselApi']
export const Checkbox: typeof import("../components/ui/checkbox/index")['Checkbox']
export const Command: typeof import("../components/ui/command/index")['Command']
export const CommandDialog: typeof import("../components/ui/command/index")['CommandDialog']
export const CommandEmpty: typeof import("../components/ui/command/index")['CommandEmpty']
export const CommandGroup: typeof import("../components/ui/command/index")['CommandGroup']
export const CommandInput: typeof import("../components/ui/command/index")['CommandInput']
export const CommandItem: typeof import("../components/ui/command/index")['CommandItem']
export const CommandList: typeof import("../components/ui/command/index")['CommandList']
export const CommandSeparator: typeof import("../components/ui/command/index")['CommandSeparator']
export const CommandShortcut: typeof import("../components/ui/command/index")['CommandShortcut']
export const Dialog: typeof import("../components/ui/dialog/index")['Dialog']
export const DialogClose: typeof import("../components/ui/dialog/index")['DialogClose']
export const DialogTrigger: typeof import("../components/ui/dialog/index")['DialogTrigger']
export const DialogHeader: typeof import("../components/ui/dialog/index")['DialogHeader']
export const DialogTitle: typeof import("../components/ui/dialog/index")['DialogTitle']
export const DialogDescription: typeof import("../components/ui/dialog/index")['DialogDescription']
export const DialogContent: typeof import("../components/ui/dialog/index")['DialogContent']
export const DialogScrollContent: typeof import("../components/ui/dialog/index")['DialogScrollContent']
export const DialogFooter: typeof import("../components/ui/dialog/index")['DialogFooter']
export const DropdownMenuPortal: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const DropdownMenu: typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuLabel: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuSub: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const Form: typeof import("../components/ui/form/index")['Form']
export const FormField: typeof import("../components/ui/form/index")['FormField']
export const FormItem: typeof import("../components/ui/form/index")['FormItem']
export const FormLabel: typeof import("../components/ui/form/index")['FormLabel']
export const FormControl: typeof import("../components/ui/form/index")['FormControl']
export const FormMessage: typeof import("../components/ui/form/index")['FormMessage']
export const FormDescription: typeof import("../components/ui/form/index")['FormDescription']
export const FORMITEMINJECTIONKEY: typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
export const Input: typeof import("../components/ui/input/index")['Input']
export const Popover: typeof import("../components/ui/popover/index")['Popover']
export const PopoverTrigger: typeof import("../components/ui/popover/index")['PopoverTrigger']
export const PopoverContent: typeof import("../components/ui/popover/index")['PopoverContent']
export const Label: typeof import("../components/ui/label/index")['Label']
export const Select: typeof import("../components/ui/select/index")['Select']
export const SelectValue: typeof import("../components/ui/select/index")['SelectValue']
export const SelectTrigger: typeof import("../components/ui/select/index")['SelectTrigger']
export const SelectContent: typeof import("../components/ui/select/index")['SelectContent']
export const SelectGroup: typeof import("../components/ui/select/index")['SelectGroup']
export const SelectItem: typeof import("../components/ui/select/index")['SelectItem']
export const SelectItemText: typeof import("../components/ui/select/index")['SelectItemText']
export const SelectLabel: typeof import("../components/ui/select/index")['SelectLabel']
export const SelectSeparator: typeof import("../components/ui/select/index")['SelectSeparator']
export const SelectScrollUpButton: typeof import("../components/ui/select/index")['SelectScrollUpButton']
export const SelectScrollDownButton: typeof import("../components/ui/select/index")['SelectScrollDownButton']
export const Separator: typeof import("../components/ui/separator/index")['Separator']
export const Sheet: typeof import("../components/ui/sheet/index")['Sheet']
export const SheetTrigger: typeof import("../components/ui/sheet/index")['SheetTrigger']
export const SheetClose: typeof import("../components/ui/sheet/index")['SheetClose']
export const SheetContent: typeof import("../components/ui/sheet/index")['SheetContent']
export const SheetHeader: typeof import("../components/ui/sheet/index")['SheetHeader']
export const SheetTitle: typeof import("../components/ui/sheet/index")['SheetTitle']
export const SheetDescription: typeof import("../components/ui/sheet/index")['SheetDescription']
export const SheetFooter: typeof import("../components/ui/sheet/index")['SheetFooter']
export const Table: typeof import("../components/ui/table/index")['Table']
export const TableBody: typeof import("../components/ui/table/index")['TableBody']
export const TableCell: typeof import("../components/ui/table/index")['TableCell']
export const TableHead: typeof import("../components/ui/table/index")['TableHead']
export const TableHeader: typeof import("../components/ui/table/index")['TableHeader']
export const TableFooter: typeof import("../components/ui/table/index")['TableFooter']
export const TableRow: typeof import("../components/ui/table/index")['TableRow']
export const TableCaption: typeof import("../components/ui/table/index")['TableCaption']
export const TableEmpty: typeof import("../components/ui/table/index")['TableEmpty']
export const Toaster: typeof import("../components/ui/toast/index")['Toaster']
export const Toast: typeof import("../components/ui/toast/index")['Toast']
export const ToastViewport: typeof import("../components/ui/toast/index")['ToastViewport']
export const ToastAction: typeof import("../components/ui/toast/index")['ToastAction']
export const ToastClose: typeof import("../components/ui/toast/index")['ToastClose']
export const ToastTitle: typeof import("../components/ui/toast/index")['ToastTitle']
export const ToastDescription: typeof import("../components/ui/toast/index")['ToastDescription']
export const ToastProvider: typeof import("../components/ui/toast/index")['ToastProvider']
export const Tooltip: typeof import("../components/ui/tooltip/index")['Tooltip']
export const TooltipContent: typeof import("../components/ui/tooltip/index")['TooltipContent']
export const TooltipTrigger: typeof import("../components/ui/tooltip/index")['TooltipTrigger']
export const TooltipProvider: typeof import("../components/ui/tooltip/index")['TooltipProvider']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyCldImage: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']>
export const LazyCldMediaLibrary: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']>
export const LazyCldOgImage: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']>
export const LazyCldProductGallery: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']>
export const LazyCldUploadButton: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']>
export const LazyCldUploadWidget: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']>
export const LazyCldVideoPlayer: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']>
export const LazyAuthState: LazyComponent<typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyAlert: LazyComponent<typeof import("../components/ui/alert/index")['Alert']>
export const LazyAlertTitle: LazyComponent<typeof import("../components/ui/alert/index")['AlertTitle']>
export const LazyAlertDescription: LazyComponent<typeof import("../components/ui/alert/index")['AlertDescription']>
export const LazyAvatar: LazyComponent<typeof import("../components/ui/avatar/index")['Avatar']>
export const LazyAvatarImage: LazyComponent<typeof import("../components/ui/avatar/index")['AvatarImage']>
export const LazyAvatarFallback: LazyComponent<typeof import("../components/ui/avatar/index")['AvatarFallback']>
export const LazyBadge: LazyComponent<typeof import("../components/ui/badge/index")['Badge']>
export const LazyButton: LazyComponent<typeof import("../components/ui/button/index")['Button']>
export const LazyCard: LazyComponent<typeof import("../components/ui/card/index")['Card']>
export const LazyCardHeader: LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
export const LazyCardDescription: LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
export const LazyCardContent: LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
export const LazyCardFooter: LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
export const LazyCarousel: LazyComponent<typeof import("../components/ui/carousel/index")['Carousel']>
export const LazyCarouselContent: LazyComponent<typeof import("../components/ui/carousel/index")['CarouselContent']>
export const LazyCarouselItem: LazyComponent<typeof import("../components/ui/carousel/index")['CarouselItem']>
export const LazyCarouselPrevious: LazyComponent<typeof import("../components/ui/carousel/index")['CarouselPrevious']>
export const LazyCarouselNext: LazyComponent<typeof import("../components/ui/carousel/index")['CarouselNext']>
export const LazyCarouselApi: LazyComponent<typeof import("../components/ui/carousel/index")['CarouselApi']>
export const LazyCheckbox: LazyComponent<typeof import("../components/ui/checkbox/index")['Checkbox']>
export const LazyCommand: LazyComponent<typeof import("../components/ui/command/index")['Command']>
export const LazyCommandDialog: LazyComponent<typeof import("../components/ui/command/index")['CommandDialog']>
export const LazyCommandEmpty: LazyComponent<typeof import("../components/ui/command/index")['CommandEmpty']>
export const LazyCommandGroup: LazyComponent<typeof import("../components/ui/command/index")['CommandGroup']>
export const LazyCommandInput: LazyComponent<typeof import("../components/ui/command/index")['CommandInput']>
export const LazyCommandItem: LazyComponent<typeof import("../components/ui/command/index")['CommandItem']>
export const LazyCommandList: LazyComponent<typeof import("../components/ui/command/index")['CommandList']>
export const LazyCommandSeparator: LazyComponent<typeof import("../components/ui/command/index")['CommandSeparator']>
export const LazyCommandShortcut: LazyComponent<typeof import("../components/ui/command/index")['CommandShortcut']>
export const LazyDialog: LazyComponent<typeof import("../components/ui/dialog/index")['Dialog']>
export const LazyDialogClose: LazyComponent<typeof import("../components/ui/dialog/index")['DialogClose']>
export const LazyDialogTrigger: LazyComponent<typeof import("../components/ui/dialog/index")['DialogTrigger']>
export const LazyDialogHeader: LazyComponent<typeof import("../components/ui/dialog/index")['DialogHeader']>
export const LazyDialogTitle: LazyComponent<typeof import("../components/ui/dialog/index")['DialogTitle']>
export const LazyDialogDescription: LazyComponent<typeof import("../components/ui/dialog/index")['DialogDescription']>
export const LazyDialogContent: LazyComponent<typeof import("../components/ui/dialog/index")['DialogContent']>
export const LazyDialogScrollContent: LazyComponent<typeof import("../components/ui/dialog/index")['DialogScrollContent']>
export const LazyDialogFooter: LazyComponent<typeof import("../components/ui/dialog/index")['DialogFooter']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazyDropdownMenu: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyForm: LazyComponent<typeof import("../components/ui/form/index")['Form']>
export const LazyFormField: LazyComponent<typeof import("../components/ui/form/index")['FormField']>
export const LazyFormItem: LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
export const LazyFormLabel: LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
export const LazyFormControl: LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
export const LazyFormMessage: LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
export const LazyFormDescription: LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
export const LazyFORMITEMINJECTIONKEY: LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
export const LazyInput: LazyComponent<typeof import("../components/ui/input/index")['Input']>
export const LazyPopover: LazyComponent<typeof import("../components/ui/popover/index")['Popover']>
export const LazyPopoverTrigger: LazyComponent<typeof import("../components/ui/popover/index")['PopoverTrigger']>
export const LazyPopoverContent: LazyComponent<typeof import("../components/ui/popover/index")['PopoverContent']>
export const LazyLabel: LazyComponent<typeof import("../components/ui/label/index")['Label']>
export const LazySelect: LazyComponent<typeof import("../components/ui/select/index")['Select']>
export const LazySelectValue: LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
export const LazySelectTrigger: LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
export const LazySelectContent: LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
export const LazySelectGroup: LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
export const LazySelectItem: LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
export const LazySelectItemText: LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
export const LazySelectLabel: LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
export const LazySelectSeparator: LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
export const LazySelectScrollUpButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
export const LazySelectScrollDownButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
export const LazySeparator: LazyComponent<typeof import("../components/ui/separator/index")['Separator']>
export const LazySheet: LazyComponent<typeof import("../components/ui/sheet/index")['Sheet']>
export const LazySheetTrigger: LazyComponent<typeof import("../components/ui/sheet/index")['SheetTrigger']>
export const LazySheetClose: LazyComponent<typeof import("../components/ui/sheet/index")['SheetClose']>
export const LazySheetContent: LazyComponent<typeof import("../components/ui/sheet/index")['SheetContent']>
export const LazySheetHeader: LazyComponent<typeof import("../components/ui/sheet/index")['SheetHeader']>
export const LazySheetTitle: LazyComponent<typeof import("../components/ui/sheet/index")['SheetTitle']>
export const LazySheetDescription: LazyComponent<typeof import("../components/ui/sheet/index")['SheetDescription']>
export const LazySheetFooter: LazyComponent<typeof import("../components/ui/sheet/index")['SheetFooter']>
export const LazyTable: LazyComponent<typeof import("../components/ui/table/index")['Table']>
export const LazyTableBody: LazyComponent<typeof import("../components/ui/table/index")['TableBody']>
export const LazyTableCell: LazyComponent<typeof import("../components/ui/table/index")['TableCell']>
export const LazyTableHead: LazyComponent<typeof import("../components/ui/table/index")['TableHead']>
export const LazyTableHeader: LazyComponent<typeof import("../components/ui/table/index")['TableHeader']>
export const LazyTableFooter: LazyComponent<typeof import("../components/ui/table/index")['TableFooter']>
export const LazyTableRow: LazyComponent<typeof import("../components/ui/table/index")['TableRow']>
export const LazyTableCaption: LazyComponent<typeof import("../components/ui/table/index")['TableCaption']>
export const LazyTableEmpty: LazyComponent<typeof import("../components/ui/table/index")['TableEmpty']>
export const LazyToaster: LazyComponent<typeof import("../components/ui/toast/index")['Toaster']>
export const LazyToast: LazyComponent<typeof import("../components/ui/toast/index")['Toast']>
export const LazyToastViewport: LazyComponent<typeof import("../components/ui/toast/index")['ToastViewport']>
export const LazyToastAction: LazyComponent<typeof import("../components/ui/toast/index")['ToastAction']>
export const LazyToastClose: LazyComponent<typeof import("../components/ui/toast/index")['ToastClose']>
export const LazyToastTitle: LazyComponent<typeof import("../components/ui/toast/index")['ToastTitle']>
export const LazyToastDescription: LazyComponent<typeof import("../components/ui/toast/index")['ToastDescription']>
export const LazyToastProvider: LazyComponent<typeof import("../components/ui/toast/index")['ToastProvider']>
export const LazyTooltip: LazyComponent<typeof import("../components/ui/tooltip/index")['Tooltip']>
export const LazyTooltipContent: LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipContent']>
export const LazyTooltipTrigger: LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipTrigger']>
export const LazyTooltipProvider: LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipProvider']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
