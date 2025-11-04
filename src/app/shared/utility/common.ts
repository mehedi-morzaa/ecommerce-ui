import { environment } from "../../../environments/environment";
import { MediaSourceEnum } from "../enums/media-source-enum";

export class Common {
    private static readonly CLIENT_ID = 1;

    public static readonly InventoryImagePrefix = '/inventory-image/';
    public static readonly CmsImagePrefix = '/cms-image/';

    public static getClientId(): number {
        return Common.CLIENT_ID;
    }

    public static get InventoryBaseApiUrl(): string {
        return environment.inventoryApiUrl;
    }

    public static get CmsBaseApiUrl(): string {
        return environment.cmsApiUrl;
    }

    public static get EcommerceGatewayBaseApiUrl(): string {
        return environment.ecommerceGatewayApiUrl;
    }

    public static getImageUrl(path: string, source: MediaSourceEnum = MediaSourceEnum.Inventory): string {
        let prefix: string;

        switch (source) {
            case MediaSourceEnum.Inventory:
            prefix = Common.InventoryImagePrefix;
            break;

            case MediaSourceEnum.Cms:
            prefix = Common.CmsImagePrefix;
            break;

            case MediaSourceEnum.EcommerceGateway:
            prefix = Common.EcommerceGatewayBaseApiUrl;
            break;

            default:
            prefix = Common.InventoryImagePrefix;
            break;
        }

        return prefix + path;
    }
}

