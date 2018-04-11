﻿using System;
using System.Threading.Tasks;
using Abp;
using Abp.Domain.Services;
using HC.WeChat.WeChatUsers;

namespace HC.WeChat.WeChatUsers.DomainServices
{
    public interface IWeChatUserManager : IDomainService
    {

        /// <summary>
        /// 初始化方法
        /// </summary>
        void InitWeChatUser();

        Task<WeChatUser> GetWeChatUserAsync(string openId, int? tenantId);

        Task BindWeChatUserAsync(WeChatUser user);

        Task UnBindWeChatUserAsync(string openId, int? tenantId);

        Task UnsubscribeAsync(string openId, int? tenantId);

        Task SubscribeAsync(string openId, string nickName, string headImgUrl, int? tenantId);

    }
}
