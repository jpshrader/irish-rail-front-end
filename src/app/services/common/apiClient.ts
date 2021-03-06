import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceList } from '../common/resourceList';

@Injectable()
export class ApiClient {
	constructor(private http: HttpClient) { }
	private requestHeaders = {
		'Access-Control-Allow-Origin': 'http://localhost:3000',
		'Access-Control-Allow-Method': 'GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
	};

	getResource<T>(url: string): T | undefined {
		let result: T | undefined;
		this.http.get<T>(url, { headers: this.requestHeaders })
			.subscribe({
				next: (response: any) => response,
				error: (error: any) => console.log(error)
			});

		return result;
	}

	getResourceList<T>(url: string): ResourceList<T> {
		const result: ResourceList<T> = new ResourceList<T>();
		this.http.get<ResourceList<T>>(url, { headers: this.requestHeaders })
			.subscribe({
				next: (response: any) => {
					result.resources = response.resources;
					result.links = response.links;
				},
				error: (error: any) => {
					result.isLoaded = true;
					console.log(error);
				},
				complete: () => result.isLoaded = true
			});

		return result;
	}
}
