import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { UserQuestion, Parameter, ApiResult } from "@shared/service-proxies/entity";
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';
// import * as moment from 'moment';
import { API_BASE_URL, SwaggerException } from '@shared/service-proxies/service-proxies';

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

export class UserQuestionService {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http:Http,@Optional() @Inject(API_BASE_URL) baseUrl?:string) { 
        this.http=http;
        this.baseUrl=baseUrl?baseUrl:"";
    }
   
    /**
     * 获取活动表单
     * @return Success
     */
    getAll(skipCount: number, maxResultCount: number, parameter: Parameter[]): Observable<PagedResultDtoOfUserQuestion> {
        let url_ = this.baseUrl + "/api/services/app/UserQuestion/GetPagedUserQuestions?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 

        //console.table(parameter);
        if (parameter.length > 0) {
            parameter.forEach(element => {
                if (element.value !== undefined && element.value !== null) {
                    url_ += element.key + "=" + encodeURIComponent("" + element.value) + "&"; 
                }
            });
        }
            
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetAll(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAll(response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfUserQuestion>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfUserQuestion>><any>Observable.throw(response_);
        });
    }

    protected processGetAll(response: Response): Observable<PagedResultDtoOfUserQuestion> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfUserQuestion.fromJS(resultData200) : new PagedResultDtoOfUserQuestion();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfUserQuestion>(<any>null);
    }

    /**
     * 通过消息id
     * @param id 表单id
     */
    get(id: string): Observable<UserQuestion> {
        let url_ = this.baseUrl + "/api/services/app/UserQuestion/GetUserQuestionByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(response_);
                } catch (e) {
                    return <Observable<UserQuestion>><any>Observable.throw(e);
                }
            } else
                return <Observable<UserQuestion>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<UserQuestion> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UserQuestion.fromJS(resultData200) : new UserQuestion();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<UserQuestion>(<any>null);
    }
}

export class PagedResultDtoOfUserQuestion implements IPagedResultDtoOfUserQuestion {
    totalCount: number;
    items: UserQuestion[];

    constructor(data?: IPagedResultDtoOfUserQuestion) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(UserQuestion.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfUserQuestion {
        let result = new PagedResultDtoOfUserQuestion();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }

    clone() {
        const json = this.toJSON();
        let result = new PagedResultDtoOfUserQuestion();
        result.init(json);
        return result;
    }
}

export interface IPagedResultDtoOfUserQuestion {
    totalCount: number;
    items: UserQuestion[];
}