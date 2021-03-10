import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class YourlsApi implements ICredentialType {
	name = 'yourlsApi';
	displayName = 'Yourls API';
	documentationUrl = 'yourls';
	properties = [
		{
			displayName: 'Signature',
			name: 'signature',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'URL',
			name: 'url',
			type: 'string' as NodePropertyTypes,
			default: '',
			placeholder: 'http://172.27.128.108:8080',
		},
	];
}
