﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;

using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;
using HC.WeChat.Retailers.Authorization;
using HC.WeChat.Retailers.Dtos;
using HC.WeChat.Retailers.DomainServices;
using HC.WeChat.Retailers;
using System;
using HC.WeChat.Authorization;

namespace HC.WeChat.Retailers
{
    /// <summary>
    /// Retailer应用层服务的接口实现方法
    /// </summary>
    //[AbpAuthorize(RetailerAppPermissions.Retailer)]
    [AbpAuthorize(AppPermissions.Pages)]
    public class RetailerAppService : WeChatAppServiceBase, IRetailerAppService
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        private readonly IRepository<Retailer, Guid> _retailerRepository;
        private readonly IRetailerManager _retailerManager;

        /// <summary>
        /// 构造函数
        /// </summary>
        public RetailerAppService(IRepository<Retailer, Guid> retailerRepository
      , IRetailerManager retailerManager
        )
        {
            _retailerRepository = retailerRepository;
            _retailerManager = retailerManager;
        }

        /// <summary>
        /// 获取Retailer的分页列表信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultDto<RetailerListDto>> GetPagedRetailers(GetRetailersInput input)
        {

            var query = _retailerRepository.GetAll();
            //TODO:根据传入的参数添加过滤条件
            var retailerCount = await query.CountAsync();

            var retailers = await query
                .OrderBy(input.Sorting)
                .PageBy(input)
                .ToListAsync();

            //var retailerListDtos = ObjectMapper.Map<List <RetailerListDto>>(retailers);
            var retailerListDtos = retailers.MapTo<List<RetailerListDto>>();

            return new PagedResultDto<RetailerListDto>(
                retailerCount,
                retailerListDtos
                );

        }

        /// <summary>
        /// 通过指定id获取RetailerListDto信息
        /// </summary>
        public async Task<RetailerListDto> GetRetailerByIdAsync(EntityDto<Guid> input)
        {
            var entity = await _retailerRepository.GetAsync(input.Id);

            return entity.MapTo<RetailerListDto>();
        }

        /// <summary>
        /// 导出Retailer为excel表
        /// </summary>
        /// <returns></returns>
        //public async Task<FileDto> GetRetailersToExcel(){
        //var users = await UserManager.Users.ToListAsync();
        //var userListDtos = ObjectMapper.Map<List<UserListDto>>(users);
        //await FillRoleNames(userListDtos);
        //return _userListExcelExporter.ExportToFile(userListDtos);
        //}
        /// <summary>
        /// MPA版本才会用到的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<GetRetailerForEditOutput> GetRetailerForEdit(NullableIdDto<Guid> input)
        {
            var output = new GetRetailerForEditOutput();
            RetailerEditDto retailerEditDto;

            if (input.Id.HasValue)
            {
                var entity = await _retailerRepository.GetAsync(input.Id.Value);

                retailerEditDto = entity.MapTo<RetailerEditDto>();

                //retailerEditDto = ObjectMapper.Map<List <retailerEditDto>>(entity);
            }
            else
            {
                retailerEditDto = new RetailerEditDto();
            }

            output.Retailer = retailerEditDto;
            return output;

        }

        /// <summary>
        /// 添加或者修改Retailer的公共方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateOrUpdateRetailer(CreateOrUpdateRetailerInput input)
        {

            if (input.Retailer.Id.HasValue)
            {
                await UpdateRetailerAsync(input.Retailer);
            }
            else
            {
                await CreateRetailerAsync(input.Retailer);
            }
        }

        /// <summary>
        /// 新增Retailer
        /// </summary>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_CreateRetailer)]
        protected virtual async Task<RetailerEditDto> CreateRetailerAsync(RetailerEditDto input)
        {
            //TODO:新增前的逻辑判断，是否允许新增
            var entity = ObjectMapper.Map<Retailer>(input);
            entity.TenantId = AbpSession.TenantId;
            entity = await _retailerRepository.InsertAsync(entity);
            return entity.MapTo<RetailerEditDto>();
        }

        /// <summary>
        /// 编辑Retailer
        /// </summary>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_EditRetailer)]
        protected virtual async Task UpdateRetailerAsync(RetailerEditDto input)
        {
            //TODO:更新前的逻辑判断，是否允许更新
            var entity = await _retailerRepository.GetAsync(input.Id.Value);
            input.MapTo(entity);

            // ObjectMapper.Map(input, entity);
            await _retailerRepository.UpdateAsync(entity);
        }

        /// <summary>
        /// 删除Retailer信息的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_DeleteRetailer)]
        public async Task DeleteRetailer(EntityDto<Guid> input)
        {

            //TODO:删除前的逻辑判断，是否允许删除
            await _retailerRepository.DeleteAsync(input.Id);
        }

        /// <summary>
        /// 批量删除Retailer的方法
        /// </summary>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_BatchDeleteRetailers)]
        public async Task BatchDeleteRetailersAsync(List<Guid> input)
        {
            //TODO:批量删除前的逻辑判断，是否允许删除
            await _retailerRepository.DeleteAsync(s => input.Contains(s.Id));
        }

        /// <summary>
        /// 添加或者修改Retailer的方法
        /// </summary>
        /// <param name="input">零售客户实体</param>
        /// <returns></returns>
        public async Task CreateOrUpdateRetailerDto(RetailerEditDto input)
        {
            if (input.Id.HasValue)
            {
                await UpdateRetailerAsync(input);
            }
            else
            {
                await CreateRetailerAsync(input);
            }
        }

    }
}

